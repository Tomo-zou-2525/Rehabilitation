let app = new Vue({
  el: "#app",
  data: {
    members: []
  },
  created: {

    axios.get("http://localhost:3000/members")
      .then(res => {

        console.log(JSON.stringify(res));
        this.members = res.data
      })
    }
});
