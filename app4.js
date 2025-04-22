let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
  h3.innerHTML = getRandomColor();
  document.querySelector("#box").style.backgroundColor = getRandomColor();
  console.log("The color has changed!");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
//default event argument
// btn.addEventListener("click", function (event) {
//   console.dir(event);
// });

//keyboard events
// let inp = document.querySelector(".inbox");
// inp.addEventListener("keydown", function () {
//   console.log("key is pressed!");
// });

// inp.addEventListener("keydown", function (event) {
//   //console.dir(event);
//   console.log("key = ", event.key);
//   console.log(event.code, "is prssed.");
// });

//form events
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let inp = document.querySelector(".form_input");
//   console.dir(inp);
//   console.log(inp.formAction); //display the directory
//   console.log(inp.value); //Extracts the data
//   alert("your form submitted!");
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let username = form.elements[0];
//   let password = form.elements[1];

//   console.log(username.value);
//   console.log(password.value);
//   alert(`Hi, ${username.value} your password is ${password.value}`);
// });
