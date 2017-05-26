import Ember from 'ember';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Profile form',
    elementId: '',
    saveButtonLabel: 'Save Profile',
    cancelButtonLabel: 'Cancel',
    elements: [
      {
        name: 'NickName',
        type: 'text',
        index: 'nickname',
        value: '',
        class: 'col-sm-12',
        placeholder: 'Please type nickname',
        validator(value) {
          return true;
        }
      },
      {
        name: 'Name',
        type: 'text',
        index: 'name',
        value: '',
        class: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2',
        placeholder: 'Please type name'
      },
      {
        name: 'Location',
        type: 'text',
        index: 'location',
        value: '',
        class: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2',
        placeholder: 'Please type location'
      },
      {
        name: 'Age',
        type: 'number',
        index: 'age',
        value: '',
        class: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2',
        placeholder: 'Please type age'
      },
      {
        name: 'Sex',
        type: 'select',
        index: 'sex',
        value: '',
        placeholder: 'Please select',
        options: ['male', 'female']
      },
      {
        name: 'CheckBox',
        type: 'checkbox',
        index: 'checkbox',
        value: ''
      },
    ]
  },

  actions: {
    saveProfile() {
      //saveItem.bind(this)('Profile');
    },

    editProfile(Profile) {
      //fillFormToEdit.bind(this)(Profile);
    },

    deleteProfile(Profile) {
      //deleteItem.bind(this)(Profile, 'Profile was deleted');
    },

    cancel() {
      //cancelEditions.bind(this)();
    }
  }
});
