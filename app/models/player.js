import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
	name: attr('string'),
	school: attr('string'),
	position: attr('string'),
	
	//comments: hasMany('comment')
});
