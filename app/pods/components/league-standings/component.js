/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
	selected: null,

	weeklyResults: [{
		name: 'John',
		place: 1,
		points: 100
		},
		{
			name: 'Jack',
			place: 2,
			points: 95
		},
		{
			name: 'Scott',
			place: 3,
			points: 80
		},
		{
			name: 'Mike',
			place: 4,
			points: 75
		}],

});
