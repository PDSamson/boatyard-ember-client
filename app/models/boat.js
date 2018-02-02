import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ownerName: DS.attr('string'),
  ownerEmail: DS.attr('string'),
  ownerPhone: DS.attr('number'),
  length: DS.attr('number'),
  boatType: DS.attr('string'),
  make: DS.attr('string'),
  year: DS.attr('number'),
  stored: DS.attr('boolean'),
  user: DS.belongsTo('user'),
  projects: DS.hasMany('project')
});
