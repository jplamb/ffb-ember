/**
 * Created by jplamb on 5/14/17.
 */
export default Ember.Helper.extend({
	compute(params, hash) {
		let sum = 0;

		params.forEach(quant => {
			sum += Number(quant);
		});
		return sum;
	}
});
