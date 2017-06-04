import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  //this.route('catalog');
  this.route('catalog', { path: '/catalog/:item_id' });
  this.route('about');
  this.route('profile');

  this.route('admin', function() {
    this.route('invitation');
    this.route('books');
    this.route('settings');
  });
  this.route('book');
  this.route('comment');
  this.route('user');
  this.route('login');
  this.route('token');
  this.route('author', { path: '/author/:author_id' });
  this.route('authors');
  this.route('page-not-found', { path: '/*path' });
  this.route('test');
});

export default Router;
