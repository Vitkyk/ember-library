import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return this.store.query('book', {
       limit: 5,
       offset: 0
     });
  }
});

