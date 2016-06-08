import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        day: "Day " + this.get('day'),
        image: this.get('image'),
        body: this.get('body'),
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
