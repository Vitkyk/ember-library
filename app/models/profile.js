import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  sex: DS.attr('string'),
  age: DS.attr('number'),
  language: DS.attr('string'),
  about: DS.attr('string'),
  agreement: DS.attr('boolean'),
});
