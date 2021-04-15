

(() => {
  const $doc = document
  const $tabItem = $doc.getElementById("js-tab")
  const $tabContent = $tabItem.querySelectorAll('[data-content]')
  //初期化＝最初に行わせたい時に行う
  const init = () => {
    $tabContent[0].style.display = "block"
  }
  init()

})()
