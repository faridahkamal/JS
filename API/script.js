let output = document.getElementById("output")
let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest()

  xhr.open("GET", "read.txt", true)
  xhr.onload = function () {
    if ((this.status = 200)) {
      console.log(this.responseText)
      output.innerHTML = this.responseText
    }
  }
  xhr.send()
})
/*
 AJAX: ASynchronous Javascript and XML
 */
