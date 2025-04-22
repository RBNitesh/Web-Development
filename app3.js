let p = document.createElement("p");
p.innerText = "Hey, I am Red!";
p.style.color = "red";
let body = document.querySelector("body");
body.append(p);

let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";

body.prepend(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");
h1.innerHTML = "I am in div";
para.innerText = "ME TOO";

div.insertAdjacentElement("beforeend", h1);
div.insertAdjacentElement("beforeend", para);
div.classList.add("box");
body.insertAdjacentElement("beforeend", div);

let btn = document.createElement("button");
btn.innerHTML = "click me!";
btn.id = "btn";
// btn.setAttribute("id", "btn");
body.append(btn);

let ip = document.createElement("input");
ip.placeholder = "username";
body.append(ip);

//DOM Events
function sayHello() {
  alert("button is clicked!");
}

btn.onclick = sayHello;

function enter() {
  console.log("entered the button!");
}

btn.onmouseenter = enter;
