// local storage is actually a  browser database for storing values or informations
// session storage also acts the same way
/*
The diff btw local and session storage is that for local storage, you would have to manually
remove or delete items from it. While for session storage info in it is deleted once the 
browser is closed.
*/
let fname = "zoro"

let username = localStorage.setItem("name", fname)

console.log(username)
