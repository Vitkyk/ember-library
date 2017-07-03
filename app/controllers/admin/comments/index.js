import Ember from 'ember';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'Comments',
    modelName: 'comment',
    routeToForm: 'admin.comments.form',
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
        name: 'DATE',
        index: 'date'
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
  },
});
