import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),

  //author: DS.belongsTo('author'),
  comments: DS.hasMany('comment'),
});
