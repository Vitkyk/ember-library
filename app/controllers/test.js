import Ember from 'ember';
import TestValidations from '../validations/test';

export default Ember.Controller.extend({
  TestValidations,
  actions: {
    submit(changeset) {
      console.log(changeset.get('isValid'));
      changeset.validate().then(() => {
        console.log(changeset.get('isValid'));
      })
      return changeset.save();
    },

    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
