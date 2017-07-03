import Ember from 'ember';
import CommentValidations from '../../../validations/comment';
import { createFormDescriptionElement } from '../../../utils/form-descriptions';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Comment form',
    modelName: 'comment',
    returnAddress: 'admin.comments',
    elementId: '',
    saveButtonLabel: 'Save Comment',
    cancelButtonLabel: 'Cancel',

    text: '',
    date: '',
    book: '',
    user: '',
    descriptions: [
      createFormDescriptionElement('Text', 'text', 'input', 'text', 'Please type text'),
      createFormDescriptionElement('Date', 'date', 'datetime-local', 'datetime-local'),
      createFormDescriptionElement('Book', 'book', 'input', 'text', 'Please type book'),
      createFormDescriptionElement('User', 'user', 'input', 'text', 'Please type user'),
    ],
  },

  CommentValidations,
});
