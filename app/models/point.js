import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	week: attr('number'),
	player_id: attr('number'),
	total_points: attr('number'),
	elig_points: attr('number'),
	unelig_points: attr('number')
	//comments: hasMany('comment')
});
