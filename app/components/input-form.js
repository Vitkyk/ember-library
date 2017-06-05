import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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
    }
  }
});
