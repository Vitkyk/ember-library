import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  nickname: [
    validatePresence(true)
  ],
  firstName: [
    validatePresence(true)
  ],
  lastName: [
    validatePresence(true)
  ],
  age: [
    validateNumber({ integer: true }),
    validateNumber({ lt: 200 }),
    validateNumber({ gt: 0 }),
  ],
};
