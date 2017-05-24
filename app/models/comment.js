import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  date: DS.attr('string'),

  book: DS.belongsTo('book'),
  user: DS.belongsTo('user')
});
