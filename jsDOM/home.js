let username = document.getElementById("username")
let password = document.getElementById("pword")
let cpassword = document.getElementById("pword1")
let button = document.getElementById("btn_login")
let message = document.getElementById("msg")

button.addEventListener("click", validateForm)

function validateForm(e) {
  e.preventDefault()
  if (username.value == "" || password.value == "" || cpassword.value == "") {
    message.innerHTML = "Please fill in all fields"
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else if (username.value == "Zoro" && password.value == "wado" && cpassword.value == password.value) {
    message.innerHTML = "Welcome back " + username.value
    setTimeout(() => {
      window.location.href = "products.html"
    }, 3000)
  } else {
    message.innerHTML = "Invalid credentials"
  }
}
