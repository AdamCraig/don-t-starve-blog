import DS from 'ember-data';

export default DS.Model.extend({
    day: DS.attr(),
    title: DS.attr(),
    post: DS.attr(),
    image: DS.attr()
});
