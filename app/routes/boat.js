import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
     return this.get('store').findRecord('boat', params.boat_id)
   },
  actions: {
    createProject(project) {
     let newProject = this.get('store').createRecord('project', project);
     newProject.save()
        .then(() => this.get('flashMessages').success('Project Successfully Created'))
        .catch(() => this.get('flashMessages').danger('Project Not Created'));
    }
  }
});
