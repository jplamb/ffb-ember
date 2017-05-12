/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	sortProperty: 'name',
	filterableAttrs: ['name', 'team', 'position'],
	filterText: null,

	init() {
		this._super(...arguments);
		this.set('tab', 'players');
	},

	players: Ember.computed(function() {
		return this.get('store').findAll('player');
	}),

	sortedPlayers: Ember.computed('sortProperty', 'players', 'filterText', function() {
		let players = this.get('players');
		const sortProp = this.get('sortProperty');
		const filter = this.get('filterText');
		const filterableAttrs = this.get('filterableAttrs');
		let match;

		if (filter && filter !== '') {
			players = players.filter(player => {
				match = false;
				filterableAttrs.forEach(field => {
					if (!player.get(field)) {return;}
					if (player.get(field).toString().toLowerCase().slice(0, filter.length) === filter.toLowerCase()) {
						match=true;
					}
				});
				return match;
			});
		}
		return players.sortBy(sortProp);
	}),

	actions: {
		sortBy(property) {
			const sortProp = this.get('sortProperty');
			if (sortProp === property) {
				this.set('sortProperty', 'name');
			} else {
				this.set('sortProperty', property);
			}
		},
	}
});
