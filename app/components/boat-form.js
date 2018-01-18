import Ember from 'ember';

export default Ember.Component.extend({
  newBoat: {
    name: null,
    ownerName: null,
    ownerEmail: null,
    ownerPhone: null,
    length: null,
    boatType: null,
    make: null,
    year: null,
    stored: true
  },
  actions: {
    createBoat () {
      this.sendAction('createBoat', this.get('newBoat'))
      this.set('newBoat.name', null)
      this.set('newBoat.ownerName', null)
      this.set('newBoat.ownerEmail', null)
      this.set('newBoat.ownerPhone', null)
      this.set('newBoat.length', null)
      this.set('newBoat.boatType', null)
      this.set('newBoat.make', null)
      this.set('newBoat.year', null)
    }
  }
});
