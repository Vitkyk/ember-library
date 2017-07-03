import Ember from 'ember';
import validations from '../../../validations/book';
import { createFormDescriptionElement } from '../../../utils/form-descriptions';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Book form',
    modelName: 'book',
    returnAddress: 'admin.books',
    elementId: '',
    saveButtonLabel: 'Save Book',
    cancelButtonLabel: 'Cancel',

    author: '',
    name: '',
    description: '',
    descriptions: [
      createFormDescriptionElement('Author', 'author', 'input', 'text', 'Please type text'),
      createFormDescriptionElement('Name', 'name', 'input', 'text', 'Please type book'),
      createFormDescriptionElement('Description', 'description', 'input', 'text', 'Please type user'),
    ],
  },

  validations,
});
