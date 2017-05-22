import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        autor: 'Marie Curie'
      },
      {
        autor: 'Mae Jemison'
      },
      {
        autor: 'Albert Hofmann'
      }
    ];
  }
});
