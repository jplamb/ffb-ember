/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
	selected: null,
	rosterPlayers: [
		{
			name: 'Jerod Evans',
			position: 'QB',
			school: 'Virginia Tech',
			opponent: 'Georgia Tech',
			pointsElig: true
		},
		{
			name: 'Nick Chubb',
			position: 'RB',
			school: 'Georgia',
			opponent: 'Alabama',
			pointsElig: true
		},
		{
			name: 'Calvin Ridley',
			position: 'WR',
			school: 'Alabama',
			opponent: 'Georgia',
			pointsElig: true
		},
		{
			name: 'Nick Weiler',
			position: 'Kicker',
			school: 'UNC',
			opponent: 'NC State',
			pointsElig: false
		},
	],

	weekSelected: null,
});
