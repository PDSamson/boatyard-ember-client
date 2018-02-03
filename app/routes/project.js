import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
   return this.get('store').findRecord('project', params.project_id)
  },
  actions: {
    updateProject(project) {
      project.save()
        .then(() => this.get('flashMessages').success('Project Successfully Updated'))
        .catch(() => this.get('flashMessages').danger('Update Failed'));
    }
  }
});
