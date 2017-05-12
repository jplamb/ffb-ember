import DS from 'ember-data';

export default DS.RESTSerializer.extend( {
	primaryKey: 'user_id',
	serializeId: function(id) {
		return id.toString();
	},
});
