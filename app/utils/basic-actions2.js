export function saveItem(modelName) {
  const form = this.get('formDescription');

  const data = {};
  for (let i = 0; i < form.descriptions.length; i++) {
    const key = form.descriptions[i].index;
    data[key] = form.descriptions[i].foreignKey ?
      this.store.peekRecord(key, form[key]) : form[key];

  }

  if (form.elementId === '') {
    const newComment = this.store.createRecord(modelName, data);

    newComment.save();
  } else {
    this.store.findRecord(modelName, form.elementId).then(function(record) {
      record.setProperties(data);

      record.save();
    });
  }
}

export function fillFormToEdit(item) {
  const form = this.get('formDescription');

  for (let i = 0; i < form.descriptions.length; i++) {
    form.set(form.descriptions[i].index, item.get(form.descriptions[i].index))
  }

  form.set('elementId', item.get('id'));
}

export function deleteItem(item, message) {
  let confirmation = confirm('Are you sure?');

  if (confirmation) {
    item.destroyRecord().then(() => {
      this.set('responseMessage', message);
    });
  }
}

export function cancelEditions(changeset) {
  let confirmation = confirm('Are you sure?');

  if (confirmation) {
    return changeset.rollback();
  }
}
