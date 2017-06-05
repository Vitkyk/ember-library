import Ember from 'ember';
import TestValidations from '../../validations/test';
import { saveItem, cancelEditions } from '../../utils/basic-actions2';
import { fillFormToEdit, deleteItem } from '../../utils/basic-actions';

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
  actions: {
    submit(changeset) {
      //changeset.validate().then(() => {
        //console.log(1);
        //if (changeset.get('isValid')) {
          //console.log(2);

          changeset.save().then(() => {
            //console.log(3);
            saveItem.bind(this)('comment');
          });

        //}
      //});

    },

    rollback(changeset) {
      return cancelEditions.bind(this)(changeset);
    },

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
