

(() => {
  const $doc = document
  const $tabItem = $doc.getElementById("js-tab")
  const $tabData = $tabItem.querySelectorAll('[data-nav]')
  const $tabContent = $tabItem.querySelectorAll('[data-content]')

  //リファクタリング
  const ACTIVE_CLASS = "is-active"
  const navLen = $tabData.length

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
    // console.log(e);
    const $this = e.target
    //datasetはDOM要素を取ってくる .navはdata-nav
    const targetVal = $this.dataset.nav
    // console.log($this);
    console.log(targetVal);

    //対象外のコンテンツを無効化する
    let index = 0
    while (index < navLen) {
      //ボタンにhandleClick関数をくっつける
      $tabContent[index].style.display = "none"
      $tabData[index].classList.remove(ACTIVE_CLASS)
      index++
    }

    // 対象のコンテンツをアクティブ化
    $tabItem.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = "block"
    $tabData[targetVal].classList.add(ACTIVE_CLASS)
    console.log($tabData);

  }

  //全部のタブにイベントつける
  let index = 0
  while (index < navLen) {
    //ボタンにhandleClick関数をくっつける
    $tabData[index].addEventListener("click", (e) => handleClick(e))
    index++
  }


})()
