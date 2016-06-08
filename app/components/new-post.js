import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        day: this.get('day'),
        image: this.get('image'),
        body: this.get('body'),
      };
      this.sendAction('savePost', params);
    }
  }
});
