import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return (params.item_id === 'new') ?
      this.store.createRecord('book', {}) : this.store.find('book', params.item_id);
  }
});
