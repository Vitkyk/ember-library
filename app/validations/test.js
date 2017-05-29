import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  nickname: [validatePresence(true)],
  name: [validatePresence(true)],
  description: [validatePresence(true)],
};
