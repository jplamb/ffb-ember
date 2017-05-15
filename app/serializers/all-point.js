import DS from 'ember-data';

export default DS.RESTSerializer.extend( {
	compositeKeys: ['week', 'name', 'team'],
	extractId: function(modelClass, resourceHash) {
		return this.get('compositeKeys').map(attr =>
			resourceHash[attr]).join('-');
	},
});
