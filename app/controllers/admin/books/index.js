import Ember from 'ember';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'Books',
    modelName: 'book',
    routeToForm: 'admin.books.form',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'Author',
        index: 'author'
      },
      {
        name: 'Name',
        index: 'name'
      },
      {
        name: 'Description',
        index: 'description'
      },
    ]
  },
});
