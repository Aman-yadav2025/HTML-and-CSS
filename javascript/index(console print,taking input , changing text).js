console.log("hello");
window.alert("this is a popUp");

document.getElementById("hello").textContent = "hello world";

document.getElementById("para").textContent = "this is a test";

// using window promt
let username = window.prompt("enter youre username");
console.log(username);

//using html textbox;

let usernameHTML;
document.getElementById("button").onclick = function(){
    usernameHTML = document.getElementById("usernameHTML").value;
    console.log(usernameHTML);
};