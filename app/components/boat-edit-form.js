import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateBoat () {
      return this.sendAction('updateBoat', this.get('boat'))
    }
  }
});
