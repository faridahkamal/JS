let destinput = document.querySelector("#dest")
let dest_btn = document.querySelector("#btn_dest")
let output = document.querySelector("#output")
let display = document.querySelector(".display")

dest_btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (destinput.value == "") {
    display.style.display = "block"
    output.innerHTML = "Please enter a destination"
  } else if (destinput.value == "lagos") {
    display.style.display = "block"
    output.innerHTML = "Lagos cost $20 travelling from Abuja"
  } else if (destinput.value == "owerri") {
    display.style.display = "block"
    output.innerHTML = "Owerri cost $10 travelling from Abuja"
  } else if (destinput.value == "kano") {
    display.style.display = "block"
    output.innerHTML = "Kano cost $25 travelling from Abuja"
  } else {
    display.style.display = "block"
    output.innerHTML = "Invalid!!"
  }
})
