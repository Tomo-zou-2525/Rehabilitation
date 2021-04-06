//setTimeout

// console.log("111");

// setTimeout(() => {
//   console.log("unko" + "buriburi");
// }, 5000);

// console.log("222");

//Promise

//Promiseオブジェクトを作成
const promise = new Promise((resolve, reject) => {
  //resolve, rejectも関数
  //成功→resolve、失敗→reject
  setTimeout(() => {
    console.log("promiseの中のSetTimeout");
    resolve("なんぞ");
  }, 2000);
});
//promiseオブジェクトにthenメソッドを用意しておくことで
//thenメソッドの引数にcallback関数を用意しておくと
//resolve()が呼ばれたタイミングでpromise.thenの中身のcallback関数が呼ばれる
promise.then((data) => {
  console.log("thenの中");
  console.log("data: ", data);
});
