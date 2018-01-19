import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('boat');
  },
  actions: {
    createBoat(boat) {
      let newBoat = this.get('store').createRecord('boat', boat);
      newBoat.save()
      .then(() => this.get('flashMessages').success('Boat Successfully Created'))
      .catch(() => this.get('flashMessages').danger('Boat Not Created'));
    },
    deleteBoat(boat) {
      boat.destroyRecord()
        .then(() => this.get('flashMessages').success('Boat Successfully Deleted'))
        .catch(() => this.get('flashMessages').danger('Delete Failed'));
    },
    updateBoat(boat) {
      boat.save()
        .then(() => this.get('flashMessages').success('Boat Successfully Updated'))
        .catch(() => this.get('flashMessages').danger('Update Failed'));
    }
  }
});
