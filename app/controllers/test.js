import Ember from 'ember';
import TestValidations from '../validations/test';
import { saveItem, fillFormToEdit, deleteItem, cancelEditions } from '../utils/basic-actions2';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Profile form',
    elementId: '',
    saveButtonLabel: 'Save Profile',
    cancelButtonLabel: 'Cancel',

    nickname: '',
    firstName: '',
    lastName: '',
    sex: '',
    age: '',
    language: '',
    about: '',
    agreement: '',
    descriptions: [
      {
        title: 'Nickname',
        index: 'nickname',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type nickname',
      },
      {
        title: 'First Name',
        index: 'firstName',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type first name',
      },
      {
        title: 'Last Name',
        index: 'lastName',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type last name',
      },
      {
        title: 'Sex',
        index: 'sex',
        componentType: 'select',
        options: ['male', 'female'],
      },
      {
        title: 'Age',
        index: 'age',
        componentType: 'input',
        type: 'number',
        placeholder: 'Please type your age',
      },
      {
        title: 'Language',
        index: 'language',
        componentType: 'select',
        options: ['france', 'germany', 'spain'],
      },
      {
        title: 'About',
        index: 'about',
        componentType: 'input',
        type: 'text',
        placeholder: 'Please type about',
      },
      {
        title: 'Agreement',
        index: 'agreement',
        componentType: 'checkbox',
        type: 'checkbox',
      },
    ],
  },

  items: [
    {
      key: 'zzz1'
    },
    {
      key: 'zzx2'
    },
    {
      key: 'zzc3'
    },
    {
      key: 'zxz4'
    },
    {
      key: 'zxc5'
    },
    {
      key: 'zxx6'
    },
  ],

  TestValidations,
  actions: {
    submit(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then(() => {
            saveItem.bind(this)('profile');
          });
        }
      });
    },

    rollback(changeset) {
      return cancelEditions.bind(this)(changeset);
    },

    select(value) {
      this.set('searchValue', value);
    },
  }
});
