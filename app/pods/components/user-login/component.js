import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service('session'),
	routing: Ember.inject.service('-routing'),

	actions: {
		authenticate(username, password) {
			this.get('session').authenticate('authenticator:oauth2', username, password)
				.then(data => {
					this.get('session').setAccount(username);
					//console.log(data + 'success');
				}).catch(error => {
					console.log(error + 'failure');
				})
				.finally(() => {
					this.get('session').setAccount(username);
					this.get('routing').transitionTo('home');
				});
		}
	}
});
