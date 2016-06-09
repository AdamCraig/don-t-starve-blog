import Ember from 'ember';

var clearAvatarChoice = function() {
  $("#pickWebber").removeClass("selected-avatar");
  $("#pickWendy").removeClass("selected-avatar");
  $("#pickWX").removeClass("selected-avatar");
  $("#pickWillow").removeClass("selected-avatar");
}

export default Ember.Component.extend({
  actions: {
    pickWebber() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJqLjv6JvtTLuWXqgLWnAFNji6nWEky3bfsy2gGWUwky6vSa6Jg");
      this.set('name', "Webber");
      $("#pickWebber").addClass("selected-avatar");
    },
    pickWendy() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-AHgm1nwh0HefYSiO4UW2RKwzg5YFHAAX_rFmWcg49M1PBYOrjA");
      this.set('name', "Wendy");
      $("#pickWendy").addClass("selected-avatar");
    },
    pickWX() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdRdu7bZA6nbIstLYcSQ1fKgdnsDiWNjNno9Gamv61aEAiX0gi");
      this.set('name', "WX-78");
      $("#pickWX").addClass("selected-avatar");
    },
    pickWillow() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo2zeP6I060pnUSTcaleUadffTtoEHcefQNUsY2P4l39y-Z_YiQg");
      this.set('name', "Willow");
      $("#pickWillow").addClass("selected-avatar");
    },
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
