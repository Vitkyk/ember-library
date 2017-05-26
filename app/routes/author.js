import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    const data = [
      {
        id: '1',
        name: 'Name 1',
        years: '1900-2000',
        pseudonym: ['1', '2', '3'],
        description: 'Something'
      },
      {
        id: '2',
        name: 'Name 2',
        years: '1900-2000',
        pseudonym: ['1', '2', '3'],
        description: 'Something'
      },
    ]

    for (let i = 0; i < data.length; i++)
    {
      if (data[i].id === params.author_id) {
        return data[i];
      }
    }

    return {};

    //return this.store.find('book', params.author_id);
  }
});
