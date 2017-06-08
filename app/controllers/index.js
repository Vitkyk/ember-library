// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  bookListDescription: [
    {
      key: 'name',
      label: 'Title: '
    },
    {
      key: 'author',
      label: 'Author: '
    },
    {
      key: 'img',
      label: ''
    }
  ],
});
