import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        message: this.get('message'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }
  }
});
