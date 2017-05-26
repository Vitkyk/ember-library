import Ember from 'ember';
import { saveItem, fillFormToEdit, deleteItem, cancelEditions } from '../utils/basic-actions';

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

  formDescription: {
    header: 'New BOOK',
    elementId: '',
    saveButtonLabel: 'Save Comment',
    cancelButtonLabel: 'Cancel',
    elements: [
      {
        name: 'Author',
        type: 'text',
        index: 'author',
        value: '',
        placeholder: 'Please type book author'
      },
      {
        name: 'Name',
        type: 'text',
        index: 'name',
        value: '',
        placeholder: 'Please type book name'
      },
      {
        name: 'Description',
        type: 'text',
        index: 'description',
        value: '',
        placeholder: 'Please type book description'
      },
    ]
  },

  actions: {
    saveBook() {
      saveItem.bind(this)('book');
    },

    editBook(book) {
      fillFormToEdit.bind(this)(book);
    },

    deleteBook(book) {
      deleteItem.bind(this)(book, 'Book was deleted');
    },

    cancel() {
      cancelEditions.bind(this)();
    }
  }
});
