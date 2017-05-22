import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('catalog');
  this.route('about');
  this.route('profile');

  this.route('admin', function() {
    this.route('invitations');
  });
  this.route('book');
  this.route('comment');
  this.route('user');
  this.route('login');
  this.route('token');
});

export default Router;
