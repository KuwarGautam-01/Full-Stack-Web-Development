//ans 1

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me!";

document.querySelector('body').append(button);
document.querySelector('body').append(input);

// ans 2

button.setAttribute("id" , "btn");
input.setAttribute('placeholder' , "username");

// ans 3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// ans 4

let h1 = document.createElement("h1");
h1.classList.add("h1Style");
h1.innerText = "DOM Practice";

document.querySelector("body").prepend(h1);

// ans 5

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector("body").append(p);