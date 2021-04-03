let app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js表示できてる？",
    lists: ["unko", "tinko", "言わせんなよ"],
    bindMessage: "pタグとbindMessageの中身を同期",
    seenIf: true,
    seenShow: true,
    seenHide: true,
    show: false
  },
  methods: {
    handleClick: function(event) {
      alert(event);
    },
    clickBox: function(e) {
      this.seenHide = e.target;
    }
  }
});
