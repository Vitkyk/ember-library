import Ember from 'ember';

export default Ember.Controller.extend({
  bookId: '',
  inputAuthor: '',
  inputName: '',
  inputDescription: '',

  actions: {
    saveBook() {
      function cleanFields(context) {
        context.set('bookId', '');
        context.set('inputAuthor', '');
        context.set('inputName', '');
        context.set('inputDescription', '');
      }

      const id = this.get('bookId');
      const author = this.get('inputAuthor');
      const name = this.get('inputName');
      const description = this.get('inputDescription');

      if (id === '') {
        const newBook = this.store.createRecord('book', {
          author: author,
          name: name,
          description: description
        });

        newBook.save().then((response) => {
          this.set('responseMessage', `Book saved. Id: ${response.get('id')}`);
          cleanFields(this);
        });
      } else {
        this.store.findRecord('book', id).then(function(record) {
          record.set('author', author);
          record.set('name', name);
          record.set('description', description);

          record.save().then(() => {
            //this.set('responseMessage', `Book updated. Id: ${id}`);
            //cleanFields(this);
          });
        });
        this.set('responseMessage', `Book updated. Id: ${id}`);
        cleanFields(this);
      }
    },

    editBook(book) {
      const id = book.get('id');
      const author = book.get('author');
      const name = book.get('name');
      const description = book.get('description');

      this.set('bookId', id);
      this.set('inputAuthor', author);
      this.set('inputName', name);
      this.set('inputDescription', description);
    },

    deleteBook(book) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        book.destroyRecord();
      }
    }
  }
});
