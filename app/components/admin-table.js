import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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
    },

    editItem(item) {
      console.log('edit');
      const form = this.get('formDescription');

      for (let i = 0; i < form.descriptions.length; i++) {
        const key = form.descriptions[i].index;
        console.log(key, item.get(key));
        Ember.set(form, key, item.get(key));
      }
      //changeset.set('elementId', item.get('id'));
      //changeset.save();

    },

   deleteItem(item) {
     item.destroyRecord().then(() => {
       this.set('responseMessage', 'Success deletion');
     });
   },
 }
});
