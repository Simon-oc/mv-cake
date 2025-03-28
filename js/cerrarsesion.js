const user = JSON.parse(localStorage.getItem("user")) || []

for (let i = 0; i < user.length; i++) {
    if (user[i].userLogged ) {
      user[i].userLogged = false
      localStorage.setItem("user", JSON.stringify(user))
      window.location = "../index.html"
  }
}