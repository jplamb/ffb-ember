import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
	store: Ember.inject.service(),

	isAuthenticated: false,

	setAuth(auth) {
		this.set('isAuthenticated', auth);
	},
	// currentUser: Ember.computed('isAuthenticated', function() {
	// 	if (this.get('isAuthenticated')) {
	// 		const promise = this.get('store').queryRecord('account', {});
	// 		return DS.PromiseObject.create({ promise: promise })
	// 	}
	// }),

	authenticate(user, pass) {
		return this.get('store').queryRecord('account', {username:user, password:pass});
	}
});
