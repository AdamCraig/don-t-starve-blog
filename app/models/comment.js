import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  message: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
