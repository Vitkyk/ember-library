import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  text: [
    validatePresence(true)
  ],
};
