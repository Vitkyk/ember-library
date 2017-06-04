import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  navBarElements: [
    {
      title: 'Home',
      link: 'index'
    },
    {
      title: 'Book',
      link: 'book'
    },
    {
      title: 'Profile',
      link: 'profile'
    },
    {
      title: 'User',
      link: 'user'
    },
    {
      title: 'Comment',
      link: 'comment'
    },
    {
      title: 'Profile',
      link: 'profile'
    },
    {
      title: 'About',
      link: 'about'
    },
    {
      title: 'Admin',
      dropdown: true,
      dropdownElements: [
        {
          title: 'Admin panel',
          link: 'admin'
        },
        {
          title: 'Books',
          link: 'admin.books'
        },
        {
          title: 'Settings',
          link: 'admin.settings'
        }
      ]
    }
  ],

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
