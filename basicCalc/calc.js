let add = document.getElementById("add")
let sub = document.getElementById("sub")
let times = document.getElementById("times")
let divide = document.getElementById("divide")
let ans = document.getElementById("ans")

add.addEventListener("click", function (e) {
  e.preventDefault()
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  let result = num1 + num2
  ans.innerHTML = result
})
sub.addEventListener("click", function (e) {
  e.preventDefault()
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  let result = num1 - num2
  ans.innerHTML = result
})
times.addEventListener("click", function (e) {
  e.preventDefault()
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  let result = num1 * num2
  ans.innerHTML = result
})
divide.addEventListener("click", function (e) {
  e.preventDefault()
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  let result = num1 / num2
  ans.innerHTML = result
})
