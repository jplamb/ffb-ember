/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
	weekSelected: 'Week 1',

	rawStandings: Ember.computed(function() {
		return this.get('store').findAll('team-point');
	}),

	rawDefStandings: Ember.computed(function() {
		return this.get('store').findAll('team-def-point');
	}),

	ob: Ember.observer('rawStandings', 'rawStandings.isFulfilled', function() {
		console.log(this.get('rawStandings'));
	}),

	standings: Ember.computed('rawStandings.isFulfilled', 'rawDefStandings.isFulfilled', function() {
		const points = this.get('rawStandings');
		const defPoints = this.get('rawDefStandings');

		if (!points.isFulfilled || !defPoints.isFulfilled) {return;}

		return this.calculateStandings([...points.toArray(), ...defPoints.toArray()]);
	}),

	weekStandings: Ember.computed('weekSelected', 'rawStandings.isFulfilled', 'rawDefStandings.isFulfilled', function() {
		let week = this.get('weekSelected');
		const rawStandings = this.get('rawStandings');
		const rawDefStandings = this.get('rawDefStandings');

		if (!rawStandings.isFulfilled || !rawDefStandings.isFulfilled) {return;}

		if (!week) {
			week = 1;
		} else {
			week = parseInt(week.split(' ')[1]);
		}

		const weeklyStandings = rawStandings.filterBy('week', week);
		const weeklyDefStandings = rawDefStandings.filterBy('week', week);

		return this.calculateStandings([...weeklyStandings, ...weeklyDefStandings]);
	}),

	calculateStandings(points) {
		const standings = {};

		points.forEach(player => {
			if (player.get('fant_team') && player.get('points_elig') === 'Y' && player.get('is_starting') === 'Y') {
				if (!(player.get('fant_team') in standings)) {
					standings[player.get('fant_team')] = player.get('total_points');
				} else {
					standings[player.get('fant_team')] += player.get('total_points');
				}
			}
		});

		let sortedStandings = [];

		for (let team in standings) {
			sortedStandings.pushObject([team, Number(standings[team]).toFixed(0)]);
		}

		sortedStandings.sort((a,b) => {
			return b[1] - a[1];
		});

		return sortedStandings;
	}

});



