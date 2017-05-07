import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service('session'),

	actions: {
		authenticate(username, password) {
			console.log('authenticating login');
			this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
				this.set('errorMessage', reason.error || reason);
			});
		},
		invalidateSession() {
			this.get('session').invalidate();
		}
	}
});