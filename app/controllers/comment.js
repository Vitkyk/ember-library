import Ember from 'ember';
import fillForm from '../utils/fillForm';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'Comments',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'TEXT',
        index: 'text'
      },
      {
        name: 'BOOK',
        index: 'book'
      },
      {
        name: 'USER',
        index: 'user'
      },
    ]
  },

  formDescription: {
    header: 'New Comment',
    elementId: '',
    saveButtonLabel: 'Save Comment',
    cancelButtonLabel: 'Cancel',
    elements: [
      {
        name: 'Text',
        type: 'text',
        index: 'text',
        value: '',
        placeholder: 'Please type comment text'
      },
      {
        name: 'Book',
        type: 'text',
        index: 'book',
        value: '',
        placeholder: 'Please type book'
      },
      {
        name: 'User',
        type: 'text',
        index: 'user',
        value: '',
        placeholder: 'Please type user'
      },
    ]
  },

  actions: {
    saveComment() {
      const self = this;
      const form = this.get('formDescription');

      const data = {};

      for (let i = 0; i < form.elements.length; i++) {
        data[form.elements[i].index] = form.elements[i].value;
      }

      if (form.elementId === '') {
        const newComment = this.store.createRecord('comment', data);

        newComment.save().then((response) => {
          this.set('responseMessage', `Comment was saved. Id: ${response.get('id')}`);

          for (let i = 0; i < form.elements.length; i++) {
            data[form.elements[i].index] = '';
          }

          fillForm.bind(this)('formDescription', data);
        });
      } else {
        this.store.findRecord('comment', form.elementId).then(function(record) {
          record.setProperties(data);

          record.save().then(function() {
            self.set('responseMessage', `Comment was updated. Id: ${form.elementId}`);

            for (let i = 0; i < form.elements.length; i++) {
              data[form.elements[i].index] = '';
            }

            data.id = '';

            fillForm.bind(self)('formDescription', data);
          });
        });
      }
    },

    editComment(comment) {
      const form = this.get('formDescription');

      const data = {};

      for (let i = 0; i < form.elements.length; i++) {
        data[form.elements[i].index] = comment.get(form.elements[i].index);//form.elements[i].value;
      }

      data.id = comment.get('id');

      fillForm.bind(this)('formDescription', data);
    },

    deleteComment(comment) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        comment.destroyRecord().then(() => {
          this.set('responseMessage', 'Comment was deleted.');
        });
      }
    },

    cancel() {
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
  }
});
