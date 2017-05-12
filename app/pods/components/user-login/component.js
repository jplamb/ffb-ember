import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service('session'),

	actions: {
		authenticate(username, password) {
			this.get('session').authenticate('authenticator:oauth2', username, password)
				.then(data => {
					if (username === data.get('username') && password === data.get('password')) {
						this.get('session').setAuth(true);
					} else {
						this.get('session').setAuth(false);
					}
				}).catch(error => {
					this.get('session').setAuth(false);
				});
		}
	}
});
