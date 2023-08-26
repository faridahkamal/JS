let fname = document.getElementById("fname")
let pwd = document.getElementById("pwd")
let btn = document.getElementById("btn")
let msg = document.getElementById("msg")

btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (fname.value == "" && pwd.value == "") {
    msg.innerHTML = "Please fill in all fields"
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else if (fname.value == "Keiko" && pwd.value == "zoro") {
    msg.innerHTML = "Konnichiwa " + fname.value + "!"
    setTimeout(() => {
      window.location.href = "about.html"
    }, 3000)
  } else {
    msg.innerHTML = "What's going on"
  }
})
