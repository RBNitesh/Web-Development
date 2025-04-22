// let smallImages = document.getElementsByClassName("oldImg");

// for (i = 0; i < smallImages.length; i++) {
//   console.dir(smallImages[i]);
//   console.dir(smallImages[i].src);
//   smallImages[i].src = "spiderman_img.png";//changing all other images to spiderman image.
// }

//query selector returns only first object.
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("h1"));//querySelectorAll selects all "h1" object

// console.dir(document.querySelector("div a"));//we can nesting like CSS

// let para = document.querySelector("p");
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);

let links = document.querySelectorAll(".box a");
for (link of links) {
  link.style.color = "green"; //inline style
}
document.querySelector(".box").children[0].style.color = "red";

let newP = document.createElement("p");
newP.innerText = "Hi, I am newP!";

let box = document.querySelector(".box");
box.appendChild(newP);

newP.style.color = "purple";

let btn = document.createElement("button");
btn.innerText = "click here!";
btn.style.borderRadius = "3px";
box.appendChild(btn);

newP.append(" do not click the button below");
