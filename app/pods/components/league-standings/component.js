/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
	weekSelected: 'Week 1',

	rawStandings: Ember.computed('weekSelected', function() {
		let week = this.get('weekSelected');

		if (!week) {
			week = 1;
		} else {
			week = parseInt(week.split(' ')[1]);
		}
		return this.get('store').query('team-point', {week:week});
	}),

	ob: Ember.observer('rawStandings', 'rawStandings.isFulfilled', function() {
		console.log(this.get('rawStandings'));
	}),

	standings: Ember.computed('rawStandings', 'rawStandings.isFulfilled', function() {
		let points = this.get('rawStandings');

		let standings = {};

		if (!points.isFulfilled) {return;}

		points.forEach(player => {
			if (player.get('fant_team')) {
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
		console.log(sortedStandings);
		return sortedStandings;
	}),

});



