import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        autor: 'Marie Curie',
        name: 'True detective',
        count: 1
      },
      {
        autor: 'Mae Jemison',
        name: 'Mr. No',
        count: 3
      },
      {
        autor: 'Albert Hofmann',
        name: 'Last remnant',
        count: 2
      }
    ];
  }
});
