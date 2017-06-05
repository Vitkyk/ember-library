import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  actions:{
    save(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save();
        }
      });
    },

    cancel(changeset) {
      changeset.rollback();
      this.get('routing').transitionTo(this.get('formDescription').returnAddress);
    }
  }
});
