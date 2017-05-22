import Ember from 'ember';
import cleanForm from '../utils/cleanForm'

export default Ember.Controller.extend({
  tableDescription: {
    header: 'BOOKS',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'Author',
        index: 'author'
      },
      {
        name: 'Name',
        index: 'name'
      },
      {
        name: 'Description',
        index: 'description'
      },
    ]
  },

  //on future
  formDescription: {
    header: 'New BOOK',
    elementId: '',
    buttonLabel: 'Save book',
    elements: [
      {
        name: 'Author',
        type: 'text',
        value: '',
        placeholder: 'Please type book author'
      },
      {
        name: 'Name',
        type: 'text',
        value: '',
        placeholder: 'Please type book name'
      },
      {
        name: 'Description',
        type: 'text',
        value: '',
        placeholder: 'Please type book description'
      },
    ]
  },

  bookId: '',
  inputAuthor: '',
  inputName: '',
  inputDescription: '',

  actions: {
    saveBook() {
      const fields = [
        'bookId',
        'inputAuthor',
        'inputName',
        'inputDescription'
      ];

      const id = this.get('bookId');
      const author = this.get('inputAuthor');
      const name = this.get('inputName');
      const description = this.get('inputDescription');

      if (id === '') {
        const newBook = this.store.createRecord('book', {
          author,
          name,
          description
        });

        newBook.save().then((response) => {
          this.set('responseMessage', `Book saved. Id: ${response.get('id')}`);
          cleanForm.bind(this)(fields);
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
        cleanForm.bind(this)(fields);
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
