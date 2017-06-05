import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  date: DS.attr('string'),

  book: DS.attr('string'),
  user: DS.attr('string'),
});
