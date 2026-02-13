let form = document.querySelector("form");
let inp = document.querySelector("#user");

form.addEventListener("submit" , function (event) {
    event.preventDefault();
    console.log(inp.value);
})

inp.addEventListener("mouseenter" , function () {
    console.log("mouse moved in");
})

inp.addEventListener("mouseout" , function () {
    console.log("mouse moved out");
})

inp.addEventListener("keypress" , function () {
    console.log("key is pressed");
})

inp.addEventListener("scroll" , function () {
    console.log("it is scrolled");
})

inp.addEventListener("load" , function () {
    console.log("load event fired");
})


let button = document.createElement("button");
button.innerText = "Click me!"

button.addEventListener("click" , function () {
    button.style.color = "green";
})

document.querySelector("body").append(button);

let inpt = document.querySelector("#name");
let heading = document.querySelector("h2");

inpt.addEventListener("input" , function () {
    let filteredValue = inpt.value.replace(/[^a-zA-Z ]/g , "");

    inpt.value = filteredValue;

    heading.innerText = filteredValue;
})