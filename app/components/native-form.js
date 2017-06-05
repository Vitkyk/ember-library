import Ember from 'ember';

function clearForm(changeset) {
/*
  const descriptions = changeset.get('descriptions');

  for (let i = 0; i < descriptions.length; i++) {
    changeset.set( descriptions[i].index, descriptions[i].defaultValue ? descriptions[i].defaultValue : '');
  }
  changeset.set('elementId', '');
*/
  changeset.rollback();
}


export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions:{
    save(changeset) {
      //changeset.save();
      const self = this;

      const descriptions = changeset.get('descriptions');
      const elementId = changeset.get('elementId');
      const modelName = changeset.get('modelName');
      const data = {};

      for (let i = 0; i < descriptions.length; i++) {
        const key = descriptions[i].index;
        data[key] = changeset.get(key);
      }

      if (elementId === '') {
        const newItem = this.get('store').createRecord(modelName, data);

        newItem.save().then((response) => {
          self.set('responseMessage', `${modelName} was saved. Id: ${response.get('id')}`);

          clearForm.bind(this)(changeset);
        });
      } else {
        this.get('store').findRecord(modelName, elementId).then(function(record) {
          record.setProperties(data);

          record.save().then(function() {
            self.set('responseMessage', `${modelName} was updated. Id: ${elementId}`);

            clearForm.bind(this)(changeset);
          });
        });
      }
    },
    cancel(changeset) {
      clearForm.bind(this)(changeset);
    }
  }
});
