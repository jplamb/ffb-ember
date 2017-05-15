import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
	store: Ember.inject.service(),
	account: null,

	currentUser: Ember.computed('isAuthenticated', 'account', function() {
		if (this.get('isAuthenticated')) {
			return this.get('store').queryRecord('account', {username: this.get('account')});
		}
	}),

	setAccount(account) {
		this.set('account', account);
	}
});
