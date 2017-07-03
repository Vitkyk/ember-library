import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return this.store.query('book', {
       limitToFirst: 5, //offset doesn't exists for firebase
     });
  }
});

