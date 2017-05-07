/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';

export default Ember.Component.extend({

  dropVis: false,

  actions: {
    weekSelected() {
      this.set('dropVis', true);
      console.log('hello');
    }
  }
});
