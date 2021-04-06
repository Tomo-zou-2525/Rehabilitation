new Vue({
  el: "#main",
  data: {
    newTask: "",
    todos: [],
  },
  methods: {
    addTask: function () {
      if (this.newTask == "") return;
      this.todos.push({ text: this.newTask, done: false, hover: false });
      this.newTask = "";
    },
  },
});

// this.todos = newTask.push(0, e);
