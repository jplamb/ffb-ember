import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	player_name:    attr('string'),
	player_id:	attr('number'),
	total_points:	attr('number'),
	is_starting:	attr('string'),
	points_elig:	attr('string'),
	fant_team:  attr('string')
});

