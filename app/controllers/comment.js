import Ember from 'ember';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'Comments',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'TEXT',
        index: 'text'
      },
      {
        name: 'BOOK',
        index: 'book'
      },
      {
        name: 'USER',
        index: 'user'
      },
    ]
  }
});
