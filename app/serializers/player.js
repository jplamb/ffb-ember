import DS from 'ember-data';

export default DS.RESTSerializer.extend( {
	primaryKey: 'player_id',
	serializeId: function(id) {
		return id.toString();
	},
});
