new Vue({
  el: "#alert",
  data: {
    message: "Hello Unko",
  },
  methods: {
    testMethod: function () {
      alert("Test");
    },
    alertDemo: function () {
      swal("どうや？");
    },
  },
});
