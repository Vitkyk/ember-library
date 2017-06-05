import Ember from 'ember';
import TestValidations from '../../validations/test';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Comment form',
    modelName: 'comment',
    elementId: '',
    saveButtonLabel: 'Save Comment',
    cancelButtonLabel: 'Cancel',

    text: '',
    date: '',
    book: '',
    user: '',
    descriptions: [
      {
        title: 'Text',
        index: 'text',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type text',
      },
      {
        title: 'Date',
        index: 'date',
        componentType: 'datetime-local',
        type: 'datetime-local',
      },
      {
        title: 'Book',
        index: 'book',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type book',
      },
      {
        title: 'User',
        index: 'user',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type user',
      },
    ],
  },

  TestValidations,
});
