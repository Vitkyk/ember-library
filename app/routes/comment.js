import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('comment');
  /*
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      books: this.store.findAll('book'),
      users: this.store.findAll('user')
    })
  */
  },

/*
  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }
  */
});
