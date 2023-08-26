let fname = document.getElementById("fname")
let email = document.getElementById("email")
let pwd = document.getElementById("pwd")
let cpwd = document.getElementById("pwd1")
let btn = document.getElementById("btn")
let message = document.getElementById("msg")

button.addEventListener("click", validateForm)

function validateForm(e) {
  e.preventDefault()
  if (fname.value == "" || pwd.value == "" || cpwd.value == "") {
    message.innerHTML = "Please fill in all fields"
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else if (fname.value == "Zoro" && pwd.value == "wado" && cpassword.value == password.value) {
    message.innerHTML = "Welcome back " + username.value
    setTimeout(() => {
      window.location.href = "products.html"
    }, 3000)
  } else {
    message.innerHTML = "Invalid credentials"
  }
}
