let texth = document.getElementById("textholder")
let article = document.querySelector("article")
let box = document.querySelector(".box")
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")

button1.addEventListener("click", function () {
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "text1.txt", true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
      texth.innerHTML = this.responseText
    }
  }
  xhr.send()
})
button2.addEventListener("click", function () {
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "user.json", true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
      let output = JSON.parse(this.responseText)
      output = `
      <ul>
              <li>${output.id}</li>
              <li>${output.username}</li>
              <li>${output.password}</li>
            </ul>
            <div><img src="${output.avatar}"></div>
      
      `
      article.innerHTML = output
    }
  }
  xhr.send()
})
button3.addEventListener("click", function () {
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "users.json", true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
      let myusers = JSON.parse(this.responseText)
      let output = ""

      for (let user of myusers) {
        output += `
        <ul>
          <li>${user.id}</li>
          <li>${user.username}</li>
          <li>${user.password}</li>
        </ul>
        <div><img src="${user.avatar}"></div>
          `
      }
      article.innerHTML = output
    }
  }
  xhr.send()
})
button4.addEventListener("click", function () {
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.github.com/users", true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.response)
      let gitusers = JSON.parse(this.responseText)
      let output = ""
      gitusers.foreach(function (users) {
        output += `
        <ul>
          <li>${users.id}</li>
          <li>${users.username}</li>
        </ul>
        <div><img src="${users.avatar_url}"></div>
          `
      })
      article.innerHTML = output
    }
  }
  xhr.send()
})
