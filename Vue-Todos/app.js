let app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: [
      { title: "仮1", isDone: true },
      { title: "仮2", isDone: true },
      { title: "仮3", isDone: true }
    ]
    //入れ物、todoの入力内容を入れる入れ物が必要なのは分かる
    //↑これはnewItemが代わりになる、今必要なのはタスクの入れ物
    //isDoneの使い方はわからない→真偽値を付与するためのもの
    //v-bindのclassで、{done: todo.isDone}になってるけどなんでだろう
  },
  methods: {
    /*ここでTodo追加*/
    saveTodo: function() {
      let item = {
        /* thisでnewItemを取得し、ハッシュ形式でデータを保存した後、
        変数itemに代入 */
        title: this.newItem,
        isDone: false
      };
      /* そのitemを引数に、todosに.pushメソッドで追加する
      この時のtodosもthisで持っててくる */
      this.todos.push(item);
    },
    deleteTodo: function(index) {
      //なんかtodo.deleteとか、デリートメソッド使うのでしょう
      //→インデックス番号を用いて、.spliceで削除を行う
      //ついでに、削除実行前にif(confirm)で注意を促す様に
      if (confirm("タスクを消しますか？")) {
        this.todos.splice(index, 1);
      }
    },
    addItem: function() {
      //inputのテキストに入力された値を保存する
      // 毎回描画されたら面倒やから、これ算出プロパティじゃない？
    },
    allDelete: function() {
      //なんかtodos.deleteとかつかうのかな？
    }
  }
});
