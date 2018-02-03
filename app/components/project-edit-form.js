import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateProject () {
      return this.sendAction('updateProject', this.get('project'))
    }
  }
});
