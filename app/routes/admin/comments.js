import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('comment');
    //return this.store.findAll('comment', {include: 'book'});

    //return this.store.findAll('comment', {include: 'book, book.comments'});
/*
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      books: this.store.findAll('book'),
      users: this.store.findAll('user')
    })
*/
  },
/*
  afterModel(comments) {
    return Ember.RSVP.all(comments.invoke('get', 'books'));
  }
  */
/*
  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }
  */
});
