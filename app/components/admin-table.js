import Ember from 'ember';

export default Ember.Component.extend({
  itemsOnPageOptions: [
    {
      value: 5,
      disabled: true,
    },
    {
      value: 10,
      disabled: false,
    },
    {
      value: 20,
      disabled: false,
    },
  ],
  itemsOnPage: 5,
  numberOfPages: Ember.computed('model.[]', 'itemsOnPage', function() {
    return Math.floor(this.get('model').get('content').length / this.get('itemsOnPage'));
  }),
 actions:{
    selectNumberOfItemsOnPage(value) {
      this.set('itemsOnPage', value);
      const itemsOnPageOptions = this.get('itemsOnPageOptions');
      for (let i = 0; i < itemsOnPageOptions.length; i++ ) {
        Ember.set(itemsOnPageOptions[i], 'disabled', value === itemsOnPageOptions[i].value);
      }
    }
 }
});
