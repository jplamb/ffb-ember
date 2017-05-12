import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	user_id: attr('number'),
	username: attr('string'),
	password: attr('string'),
	email: attr('string'),
});
