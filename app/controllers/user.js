import Ember from 'ember';

export default Ember.Controller.extend({
  tableDescription: {
    header: 'USERS',
    columns: [
      {
        name: 'ID',
        index: 'id'
      },
      {
        name: 'Login',
        index: 'login'
      },
      {
        name: 'Password',
        index: 'password'
      }
    ]
  },

  userId: '',
  inputLogin: '',
  inputPassword: '',

  actions: {
    saveUser() {
      function cleanFields(context) {
        context.set('userId', '');
        context.set('inputLogin', '');
        context.set('inputPassword', '');
      }

      const id = this.get('userId');
      const login = this.get('inputLogin');
      const password = this.get('inputPassword');

      if (id === '') {
        const newUser = this.store.createRecord('user', {
          login,
          password
        });

        newUser.save().then((response) => {
          this.set('responseMessage', `User saved. Id: ${response.get('id')}`);
          cleanFields(this);
        });
      } else {
        this.store.findRecord('user', id).then(function(record) {
          record.set('login', login);
          record.set('password', password);

          record.save().then(() => {
            //this.set('responseMessage', `Book updated. Id: ${id}`);
            //cleanFields(this);
          });
        });
        this.set('responseMessage', `User updated. Id: ${id}`);
        cleanFields(this);
      }
    },

    editUser(user) {
      const id = user.get('id');
      const login = user.get('login');
      const password = user.get('password');

      this.set('userId', id);
      this.set('inputLogin', login);
      this.set('inputPassword', password);
    },

    deleteUser(user) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        user.destroyRecord();
      }
    }
  }
});
