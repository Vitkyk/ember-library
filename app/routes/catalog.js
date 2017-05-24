import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return params.item_id !== 'all' ? [this.store.find('book', params.item_id)] : this.store.findAll('book');
  }
});
