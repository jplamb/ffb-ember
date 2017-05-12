/**
 * Created by jplamb on 5/11/17.
 */
import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	week:	attr('number'),
	fant_team:	attr('string'),
	player_name:	attr('string'),
	pos:	attr('string'),
	is_starting:	attr('string'),
	points_elig:	attr('number'),
	points:	attr('number'),
	team:	attr('number'),
	opp:	attr('number'),
});
