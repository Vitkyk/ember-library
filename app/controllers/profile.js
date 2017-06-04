import Ember from 'ember';

export default Ember.Controller.extend({
  formDescription: {
    header: 'Profile form',
    elementId: '',
    saveButtonLabel: 'Save Profile',
    cancelButtonLabel: 'Cancel',
    //remove useless
    elements: [
      {
        componentType: 'input-label',
        name: 'NickName',
        type: 'text',
        index: 'nickname',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1 col-form-label',
        class: 'col-sm-8',
        placeholder: 'Please type nickname',
      },
      {
        componentType: 'input-label',
        name: 'Name',
        type: 'text',
        index: 'name',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1',
        class: 'col-sm-8',
        placeholder: 'Please type name'
      },
      {
        componentType: 'input-text',
        name: 'Location',
        type: 'text',
        index: 'location',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1',
        class: 'col-sm-8',
        placeholder: 'Please type location',
        rows: 5
      },
      {
        componentType: 'input-label',
        name: 'Age',
        type: 'number',
        index: 'age',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1',
        class: 'col-sm-8',
        placeholder: 'Please type age'
      },
      {
        componentType: 'input-select',
        name: 'Sex',
        type: 'select',
        index: 'sex',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1',
        class: 'col-sm-8',
        placeholder: 'Please select',
        options: [
          {title: 'male', value: 'male'},
          {title: 'female', value: 'female'}
        ]
      },
      {
        componentType: 'input-label',
        name: 'CheckBox',
        type: 'checkbox',
        index: 'checkbox',
        value: '',
        nameClass: 'col-sm-2 col-sm-offset-1',
        class: 'col-sm-8',
      },
    ]
  },

  actions: {
    saveProfile() {
      //saveItem.bind(this)('Profile');
    },
    cancel() {
      //cancelEditions.bind(this)();
    }
  }
});
