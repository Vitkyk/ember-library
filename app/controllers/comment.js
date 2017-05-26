import Ember from 'ember';
import { saveItem, fillFormToEdit, deleteItem, cancelEditions } from '../utils/basic-actions';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'Comments',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'TEXT',
        index: 'text'
      },
      {
        name: 'DATE',
        index: 'date'
      },
      {
        name: 'BOOK',
        index: 'book'
      },
      {
        name: 'USER',
        index: 'user'
      },
    ]
  },

  formDescription: {
    header: 'New Comment',
    elementId: '',
    saveButtonLabel: 'Save Comment',
    cancelButtonLabel: 'Cancel',
    elements: [
      {
        name: 'Text',
        type: 'text',
        index: 'text',
        value: '',
        placeholder: 'Please type comment text'
      },
      {
        name: 'Date',
        type: 'text',
        index: 'date',
        value: '',
        placeholder: 'Please type comment date'
      },
      {
        name: 'Book',
        type: 'text',
        index: 'book',
        value: '',
        placeholder: 'Please type book',
        foreignKey: true
      },
      {
        name: 'User',
        type: 'text',
        index: 'user',
        value: '',
        placeholder: 'Please type user',
        foreignKey: true
      },
    ]
  },

  actions: {
    saveComment() {
      saveItem.bind(this)('comment');
    },

    editComment(comment) {
      fillFormToEdit.bind(this)(comment);
    },

    deleteComment(comment) {
      deleteItem.bind(this)(comment, 'Comment was deleted');
    },

    cancel() {
      cancelEditions.bind(this)();
    }
  }
});
