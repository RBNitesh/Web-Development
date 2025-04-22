// console.log("Hello World!");
// let pencilPrice = 10;
// let eraserPrice = 5;
// // let output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees.";
// let output = `The total price is: ${pencilPrice + eraserPrice} Rupees.`;
// console.log(output);

// alert("This is an alert!");

// let name = prompt("Enter your name:");
// console.log(name);

// let fruits = [
//   "apple",
//   "apple",
//   "mango",
//   "guava",
//   "mango",
//   "grapes",
//   "papaya",
//   "banana",
//   "pomegranate",
// ];
// for (fruit of fruits) {
//   console.log(fruit);
// }

let todo = [];

let req = prompt("Please enter your request");

console.log(req);

while (true) {
  if (req == "quit") {
    console.log("quiting app");
    break;
  }

  if (req == "list") {
    console.log("----------------");
    for (task of todo) {
      console.log(task);
    }
    console.log("-------------");
  } else if (req == "add") {
    let task = prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  }
  req = prompt("please enter your request");
}
