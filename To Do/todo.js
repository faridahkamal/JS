let input = document.getElementById("input")
let messgae = document.getElementById("msg")
let output = document.getElementById("output")
let button = document.getElementById("todobtn")

button.addEventListener("click", function (e) {
  e.preventDefault()
  if (input.value == "") {
    messgae.innerHTML = "Please add a task"
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else {
    li = document.createElement("li")
    li.innerHTML = input.value
    output.appendChild(li)
    input.value = ""
  }
})
