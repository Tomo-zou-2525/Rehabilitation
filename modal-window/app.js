const vm = new Vue({
  el: "#app",
  data: {
    isDone: false,
  },
  methods: {
    openModal: function () {
      this.isDone = true;
    },
    closeModal: function () {
      this.isDone = false;
    },
  },
});
