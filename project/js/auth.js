let fname = document.getElementById("fname")
let pwd = document.getElementById("pwd")
let cpwd = document.getElementById("cpwd")
let btn = document.getElementById("btn")
let msg = document.getElementById("msg")

btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (fname.value == "" && pwd.value == "" && cpwd.value == "") {
    msg.innerHTML = "Please fill in all fields"
  } else if (fname.value == "Keiko" && pwd.value == "zoro" && cpwd.value == pwd.value) {
    msg.innerHTML = "Konnichiwa" + fname.value + "!"
  } else {
    msg.innerHTML = "What's going on"
  }
})
