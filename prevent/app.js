const app = new Vue({
  el: '#app',
  data: {
    text: ''
  },
  methods: {
    childClick() {
      alert('彼女「たかし君！いらっしゃい！」')
    },
    fatherClick() {
      alert('父「うちの子に何か用かい？」')
    }
  }
})