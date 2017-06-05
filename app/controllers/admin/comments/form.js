import Ember from 'ember';
import CommentValidations from '../../../validations/comment';

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

  CommentValidations,
});
