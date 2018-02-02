import DS from 'ember-data';

export default DS.Model.extend({
  taskTitle: DS.attr('string'),
  description: DS.attr('string'),
  contractor: DS.attr('string'),
  bid: DS.attr('number'),
  completionDate: DS.attr('date'),
  payment: DS.attr('number'),
  boatId: DS.belongsTo('boat')
});
