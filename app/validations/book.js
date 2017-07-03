import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  author: [
      validatePresence(true)
  ],
  name: [
      validatePresence(true)
  ],
};
