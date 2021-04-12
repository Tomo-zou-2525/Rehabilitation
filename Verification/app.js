let vm = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
  },
  //methodsで見てみる
  methods: {
    test: function () {
      console.log(this.$el);
    },
  },
  //createdで見てみる
  created: function () {
    console.log("created");
    console.log(this.$el);
  },
  //mountedで見てみる
  mounted: function () {
    console.log("mounted");
    console.log(this.$el);
  },
});
