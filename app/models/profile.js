import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),

  validations: {
    'username': {
      presence: true,
      length: { minimum: 6 }
    },
    'email': {
      presence: true
    },
    'password': {
      presence: true,
      length: { minimum: 8 }
    }
  }
});
