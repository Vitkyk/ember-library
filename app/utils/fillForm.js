import Ember from 'ember';

export default function fillForm(formName, fields) {
  const form = this.get(formName);

  for (let i = 0; i < form.elements.length; i++) {
    if (fields[form.elements[i].index] !== undefined) {
      Ember.set(form.elements[i], 'value', fields[form.elements[i].index]);
    }
  }

  if (fields.id) {
    Ember.set(form, 'elementId', fields.id);
  }
}
