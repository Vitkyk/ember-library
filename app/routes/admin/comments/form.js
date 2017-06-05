import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return (params.item_id === 'new') ?
      this.store.createRecord('comment', {}) : this.store.find('comment', params.item_id);
  }

});
