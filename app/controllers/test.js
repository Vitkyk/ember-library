import Ember from 'ember';
import TestValidations from '../validations/test';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Profile form',
    elementId: '',
    saveButtonLabel: 'Save Profile',
    cancelButtonLabel: 'Cancel',

    nickname: 'name',
    language: 'germany',
    checkbox: true,
    descriptions: [
      {
        index: 'nickname',
        componentType: 'text',
        type: 'text',
        value: 'some',
      },
      {
        index: 'language',
        componentType: 'select',
        value: 'germany',
        options: ['france', 'germany', 'spain'],
      },
      {
        index: 'checkbox',
        componentType: 'checkbox',
        type: 'checkbox',
      },
    ],
  },
  TestValidations,
  actions: {
    submit(changeset) {
      console.log(changeset.get('isValid'));
      changeset.validate().then(() => {
        console.log(changeset.get('isValid'));
      })
      return changeset.save();
    },

    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
