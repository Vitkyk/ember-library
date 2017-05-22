import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'Marie Curie',
      email: 'example@gmail.com',
      age: 21,
    }
  }
});
