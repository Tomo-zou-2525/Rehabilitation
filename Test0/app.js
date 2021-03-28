//Vueの構文を宣言
let app = new Vue({
  //appをマウント
  el: "#app",
  /*Vueインスタンスに対してデータを定義する
  newItem→todoリストの新規入力値の入れ物
  todos~→初期に入っているリストの文字列
  methods→データ駆動時に作動する関数などを定義する場所
  addItem→追加ボタンでnewItemとして追加される



  */
  data: {
    newItem: "",
    todos: [
      { title: "task 1", isDone: true },
      { title: "task 2", isDone: true },
      { title: "task 3", isDone: true }
    ]
  },
  methods: {
    addItem: function() {}
  }
});
