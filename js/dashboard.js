const user = JSON.parse(localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user")
for (let i = 0; i < array.length; i++) {
    if(user[i].logged === true){
        saludoUser.textContent = `${user[i].user}`
    }    
}