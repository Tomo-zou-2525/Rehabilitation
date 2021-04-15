

(() => {
  const $doc = document
  const $tabItem = $doc.getElementById("js-tab")
  const $tabData = $tabItem.querySelectorAll('[data-nav]')
  const $tabContent = $tabItem.querySelectorAll('[data-content]')
  //初期化＝最初に行わせたい時に行う
  const init = () => {
    $tabContent[0].style.display = "block"
  }
  init();
  //クリックしたら起こるイベント
  //(e)はevent クリックされるなどのイベントについてくる情報
  const handleClick = (e) => {
    e.preventDefault()
    //(e) 確認
    console.log(e);
    console.log("Unko!!")
  }

  //全部のタブにイベントつける

  //ボタンにhandleClick関数をくっつける
  $tabData[0].addEventListener("click", (e) => handleClick(e))

})()
