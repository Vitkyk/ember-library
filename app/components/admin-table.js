import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  itemsOnPageOptions: [ 5, 10, 20],
  itemsOnPage: 5,
  numberOfPage: 1,
  listOfPages: Ember.computed('model.[]', 'numberOfPages', 'numberOfPage', function() {
    const pages = [];
    for (let i = 0; i < this.get('numberOfPages'); i++) {
      pages[i] = i + 1;
    }
    return pages;
  }),
  numberOfPages: Ember.computed('model.[]', 'itemsOnPage', function() {
    return Math.floor((this.get('model').get('content').length - 1) / this.get('itemsOnPage')) + 1;
  }),
  listItemsOnPage: Ember.computed('model.[]', 'itemsOnPage', 'numberOfPage', function() {
    /*
    //interesting behaviour
    var temp = this.get('model');
    temp.set('content', temp.get('content').slice(0, this.get('itemsOnPage')));
    return temp;
    */
    const itemsOnPage = this.get('itemsOnPage');
    const numberOfPage = this.get('numberOfPage');
    const numberOfPages = this.get('numberOfPages');
    const content = this.get('model').get('content')
      .slice(
        (numberOfPage - 1) * itemsOnPage,
        numberOfPages === numberOfPage ? this.get('model').get('content').length : numberOfPage * itemsOnPage
      );
    const temp = [];
    const modelName = this.get('tableDescription').modelName;

    for (let i = 0; i < content.length; i++) {
      temp[i] = this.get('store').peekRecord(modelName, content[i].id);
    }
    return temp;

    //console.log(this.get('model'));
    //return this.get('model').get('content').slice(0, this.get('itemsOnPage'));
  }),
 actions:{
    selectNumberOfItemsOnPage(value) {
      const itemsOnPage = this.get('itemsOnPage');
      this.set('itemsOnPage', value);

      const numberOfPage = this.get('numberOfPage');
      this.set('numberOfPage', Math.floor((itemsOnPage * (numberOfPage - 1))/ value) + 1);
    },

    selectNumberOfPage(value) {
      this.set('numberOfPage', value);
    },

    editItem(item) {
      //console.log('edit');
      const form = this.get('formDescription');

      for (let i = 0; i < form.descriptions.length; i++) {
        const key = form.descriptions[i].index;
        //console.log(key, item.get(key));
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
