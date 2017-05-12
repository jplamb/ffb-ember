import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.RESTAdapter.extend(DataAdapterMixin, {
	namespace: 'api',
	host: 'http://localhost:4500',
	authorizer: 'authorizer:application'
});
