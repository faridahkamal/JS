let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")

card1.addEventListener("click", function () {
  card1.style.background = "red"
  setTimeout(() => {
    window.location.reload()
  }, 3000)
})
card2.addEventListener("click", function () {
  card2.style.background = "deepskyblue"
  setTimeout(() => {
    window.location.reload()
  }, 4000)
})
