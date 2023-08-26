let username = document.getElementById("username")
let pwd = document.getElementById("pwd")
let cpwd = document.getElementById("cpwd")
let btn = document.getElementById("btn")
let message = document.getElementById("msg")

btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (username.value == "" && pwd.value == "" && cpwd.value == "") {
    message.innerHTML = "Please fill in all fields"
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else if (username.value == "Zoro" && pwd.value == "wado" && cpwd.value == pwd.value) {
    message.innerHTML = "Welcome back " + username.value
    setTimeout(() => {
      window.location.href = "../jsDOM/products.html"
    }, 3000)
  } else {
    message.innerHTML = "Invalid credentials"
  }
})
