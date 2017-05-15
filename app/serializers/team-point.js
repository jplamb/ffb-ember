import DS from 'ember-data';

export default DS.RESTSerializer.extend( {
	compositeKeys: ['week', 'player_id'],
	extractId: function(modelClass, resourceHash) {
		return this.get('compositeKeys').map(attr =>
			resourceHash[attr]).join('-');
	},
});
