const { response } = require("express");

let app = new Vue({
  el: "#app",
  data: {
    members: []
  },
  created: {

    axios.get("http://localhost:3000/members")
      .then(response => {

        console.log(JSON.stringify(response));
        this.members = response.data
      })
    }
});
