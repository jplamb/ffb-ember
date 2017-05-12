/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
	weekSelected: null,
	user: 'Team John L',

	init() {
		this._super(...arguments);
		this.set('weekSelected', this.get('weeks')[0]);
	},
	players: Ember.computed(function() {
		return this.get('store').findAll('roster');
	}),

	rosterPlayers: Ember.computed('weekSelected', 'players', 'players.isFulfilled', 'user', function() {
		if (!this.get('players.isFulfilled')) {
			return [];
		}

		let players = this.get('players');
		let week = this.get('weekSelected');
		const user = this.get('user');

		if (!week) {
			week = 1;
		} else {
			week = parseInt(week.split(' ')[1]);
		}

		players = players.filter(player => {
			if (player.get('week') === week && player.get('fant_team') === user) {
				return player;
			}
		});

		return players;
	}),
});
