import DS from 'ember-data';

export default DS.Model.extend({
    day: DS.attr(),
    title: DS.attr(),
    body: DS.attr(),
    image: DS.attr()
});
