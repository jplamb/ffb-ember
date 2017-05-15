import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('standings');
  this.route('roster');
  this.route('players');
  this.route('home', {path: ['/', '/home']});
  this.route('login');
});

export default Router;
