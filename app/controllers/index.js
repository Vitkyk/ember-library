// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',
  searchValue: 'z',

  items: [
      {
          key: 'zzz1'
      },
      {
          key:'zzx2'
      },
      {
          key:'zzc3'
      },
      {
          key:'zxc4'
      }
  ],

  isContained: Ember.computed('searchValue', function() {
    var items = this.get('items');
    var searchValue = this.get('searchValue');
    items = items.filter(function (item) {
      return item.key.includes(searchValue);
    });
    if (items.length > 3) {
        return items.slice(0, 3);
    }
    return items;
  }),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    },
    onChangeSearchValue() {
        console.log(this.get('searchValue'));
    },
    select(value) {
        this.set('searchValue', value);
    }
  }

});
