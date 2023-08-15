class BookApp {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }
  getName() {
    console.log("Hi the book title is " + this.title)
  }
  getPages() {
    console.log("Hi the pages are" + this.pages)
  }
}

let book1 = new BookApp("Things Fall Apart", "Chinua", 400)
let book2 = new BookApp("Children Songs", "Martin Payne", 450)
let book3 = new BookApp("When Women Pray", "Lucy Loo", 340)

console.log(book1)
console.log(book2)
console.log(book3)

book1.getName()
book2.getName()
book3.getName()

book1.getPages()
book2.getPages()
book3.getPages()
