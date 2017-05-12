/**
 * Created by jplamb on 5/6/17.
 */
/**
 * Created by jplamb on 5/4/17.
 */
import Ember from 'ember';
export default Ember.Component.extend({
	selected: null,
	options: null,

	actions: {
		optSelected(opt, dd) {
			this.set('selected', opt);
			dd.actions.close();
		}
	}
});
