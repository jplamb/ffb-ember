/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	dropVis: false,

	init() {
		this._super(...arguments);
		this.get('store').findAll('player').then(data => {
			this.set('players', data);
		});
	},
	actions: {
		weekSelected() {
			this.set('dropVis', true);
			console.log('hello');
		}
	}
});
