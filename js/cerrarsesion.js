const user = JSON.parse(localStorage.getItem("user")) || []

for (let i = 0; i < user.length; i++) {
    if (user[i].logged ) {
      console.log(user[i].logged)
      user[i].logged = false
      localStorage.setItem("user",JSON.stringify(user))
      window.location = "../index.html"
  }
}