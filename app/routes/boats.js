import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('boat');
  },
  actions: {
    createBoat(boat) {
      let newBoat = this.get('store').createRecord('boat', boat);
      newBoat.save()
    }
  }
});
