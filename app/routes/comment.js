import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      libraries: this.store.findAll('comment'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('user')
    })
  },
/*
  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }
  */
});
