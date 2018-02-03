import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('boats');
  this.route('boat', { path: '/boats/:boat_id'} );
  this.route('project', { path: '/projects/:project_id'} );

});

export default Router;
