import Ember from 'ember';

export default Ember.Component.extend({
  newProject: {
    taskTitle: null,
    description: null,
    contractor: null,
    bid: null,
    completionDate: null,
    payment: null,
    boat: null
  },
  actions: {
    createProject (boat) {
      this.set('newProject.boat', boat)
      this.sendAction('createProject', this.get('newProject'))
      this.set('newProject.taskTitle', null)
      this.set('newProject.description', null)
      this.set('newProject.contractor', null)
      this.set('newProject.bid', null)
      this.set('newProject.completionDate', null)
      this.set('newProject.payment', null)
      this.set('newProject.boat', null)
    }
  }
});
