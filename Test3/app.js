new Vue({
  el: "#app",
  data: {
    counter: 0,
    otherNumber: 0
  },
  computed: {
    judgeThreeCountComputed: function() {
      console.log("computed");
      return this.counter > 3 ? "Up" : "Down";
    }
  },
  methods: {
    judgeThreeCountMethod: function() {
      console.log("methods");
      return this.counter > 3 ? "Up" : "Down";
    }
  }
});
