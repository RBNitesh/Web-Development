let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let inp = document.querySelector("#ip");

// inp.addEventListener("change", function (event) {
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = inp.value;

//   console.log("final val = ",inp.value);
// });

inp.addEventListener("input", function (event) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = inp.value;

  console.log("final val = ", inp.value);
});
