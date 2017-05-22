import Ember from 'ember';

export default Ember.Controller.extend({
  inputText: '',

  isValid: Ember.computed.gte('inputText.length', 5),

  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveComment() {
      alert(`Saving of the following email address is in progress: ${this.get('inputText')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('inputText')}`);
      this.set('inputText', '');
    }
  }
});
