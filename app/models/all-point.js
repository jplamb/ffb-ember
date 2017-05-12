/**
 * Created by jplamb on 5/11/17.
 */
import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	week:   attr('number'),
	fant_team:	attr('string'),
	total_points:	attr('number'),
	elig_points:	attr('number'),
	unelig_points:	attr('number'),
	name:	attr('string'),
	position:	attr('string'),
	team:	attr('string'),
	pass_yards:	attr('number'),
	pass_td:	attr('number'),
	int_thrown:	attr('number'),
	rush_yards:	attr('number'),
	rush_td:	attr('number'),
	rec_yards:	attr('number'),
	rec_td:	attr('number'),
	fg_1_19:	attr('number'),
	fg_20_29:	attr('number'),
	fg_30_39:	attr('number'),
	fg_40_49:	attr('number'),
	fg_50_plus:	attr('number'),
	fg_made:	attr('number'),
	xp_made:	attr('number'),
	xp_att:	attr('number'),
	def_sacks:	attr('number'),
	def_force_fmble:	attr('number'),
	def_int_ret_td:	attr('number'),
});

