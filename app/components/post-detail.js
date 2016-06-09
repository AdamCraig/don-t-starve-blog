import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    },
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
    saveComment(comment, params) {
      this.sendAction('saveComment', comment, params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    }
  }
});
