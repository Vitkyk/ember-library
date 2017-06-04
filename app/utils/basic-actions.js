import fillForm from './fillForm';

export function saveItem(modelName) {
  const self = this;
  const form = this.get('formDescription');

  const data = {};

  for (let i = 0; i < form.elements.length; i++) {
    data[form.elements[i].index] = form.elements[i].foreignKey ?
      this.store.peekRecord(form.elements[i].index, form.elements[i].value) : form.elements[i].value;
  }

  if (form.elementId === '') {
    const newComment = this.store.createRecord(modelName, data);

    newComment.save().then((response) => {
      this.set('responseMessage', `${modelName} was saved. Id: ${response.get('id')}`);

      for (let i = 0; i < form.elements.length; i++) {
        data[form.elements[i].index] = '';
      }

      fillForm.bind(this)('formDescription', data);
    });
  } else {
    this.store.findRecord(modelName, form.elementId).then(function(record) {
      record.setProperties(data);

      record.save().then(function() {
        self.set('responseMessage', `${modelName} was updated. Id: ${form.elementId}`);

        for (let i = 0; i < form.elements.length; i++) {
          data[form.elements[i].index] = '';
        }

        data.id = '';

        fillForm.bind(self)('formDescription', data);
      });
    });
  }
}

export function fillFormToEdit(item) {
/*
  let blogPost = this.get('store').peekRecord('comment', comment.get('id'));


  blogPost.get('book').then((r) => {
    console.log(r);
  });
*/
  //comment.get('book').then(r => console.log(r.get('id')))

  const form = this.get('formDescription');

  const data = {};

  for (let i = 0; i < form.elements.length; i++) {
    data[form.elements[i].index] = item.get(form.elements[i].index);//form.elements[i].value;
  }

  data.id = item.get('id');

  //console.log(data);
  //debugger;

  fillForm.bind(this)('formDescription', data);
}

export function deleteItem(item, message) {
  let confirmation = confirm('Are you sure?');

  if (confirmation) {
    item.destroyRecord().then(() => {
      this.set('responseMessage', message);
    });
  }
}

export function cancelEditions() {
 let confirmation = confirm('Are you sure?');

 if (confirmation) {
   const form = this.get('formDescription');

   const data = {};

   for (let i = 0; i < form.elements.length; i++) {
     data[form.elements[i].index] = '';
   }

   data.id = '';

   fillForm.bind(this)('formDescription', data);
 }
}

export default function basicActions() {
  return true;
}
