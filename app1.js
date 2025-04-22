// const student1 = {
//   name: "shradha",
//   age: 23,
//   marks: 98,
// };

// let student2 = ["shradha", 23, 98];

// const post = {
//   username: "@niteshkr",
//   content: "acheivement",
//   likes: 3000,
//   reposts: 50,
//   tags: ["@svcet", "@C-DAC", "@isro"],
// };

// const classInfo = {
//   aman: {
//     grade: "A",
//     city: "Banglore",
//   },
//   nitesh: {
//     grade: "B",
//     city: "Kolkata",
//   },
//   arvind: {
//     grade: "C",
//     city: "Hyderabad",
//   },
//   mithun: {
//     grade: "D",
//     city: "Pune",
//   },
// };

// const classInfo = [
//   {
//     name: "anshu",
//     grade: "A",
//     city: "Banglore",
//   },
//   {
//     name: "madhur",
//     grade: "B",
//     city: "Kolkata",
//   },
//   {
//     name: "mohit",
//     grade: "C",
//     city: "Hyderabad",
//   },
//   {
//     name: "aalok",
//     grade: "D",
//     city: "Pune",
//   },
// ];

//guessing the number
// const random = Math.floor(Math.random() * 100 + 1);

// let guess = prompt("guess the number:");
// let noOfGuess = 1;
// while (true) {
//   if (guess == "quit") {
//     break;
//   }
//   if (guess == random) {
//     console.log(`Congratulations! You got the answer in ${noOfGuess} guesses.`);
//     break;
//   } else if (guess < random) {
//     noOfGuess++;
//     console.log(`To Small! try again..`);
//     guess = prompt("guess the number:");
//   } else {
//     noOfGuess++;
//     console.log(`To large! Give an try again..`);
//     guess = prompt("guess the number");
//   }
// }

//arrow function
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(3, 5);

//implicit return
// const sum = (a, b) => a + b;

//Set Timeout built in func
// setTimeout(() => {
//   console.log("Apna College!");
// }, 500);
// console.log("Welcome to");
// console.log("Kuchh bolna tha kya? Ah, ab yaad aaya ");

//Set TimeInterval built in func
// let id1 = setInterval(() => {
//   console.log("id1");
// }, 2000);

// let id2 = setInterval(() => {
//   console.log("id2");
// }, 2000);

//this keyword

// const student = {
//   name: "arvind",
//   age: 20,
//   grade: 9.7,
//   prop: this, //global scope
//   getGrade: function () {
//     console.log(this);
//     console.log(this.grade);
//   },
//   getAge: () => {
//     console.log(this);
//     console.log(this.age); //parent's scope
//   },

//   getInfo1: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },

//   getInfo2: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 2500);
//   },
// };

//write a function that prints "Hello, World!" 5 times after 2s intervals each.
// let hello = setInterval(() => {
//   console.log("Hello, World!");
// }, 2000);
// setTimeout(() => {
//   clearInterval(hello);
// }, 10000);

//write an arrow function named arrayAvg that accepts
// an array of numbers and returns the avg of those numbers.

// let arrayAvg = (arr) => {
//   sum = 0;
//   for (num of arr) {
//     sum += num;
//   }
//   console.log(sum);
// };

// arr = [1, 2, 3, 4, 5];
// arrayAvg(arr);

//write an arrow function isEven() that takes a single number as argument
//and return true if it is even otherwise false.
// const isEven = (num) => {
//   return num % 2 == 0;
// };
// const isOdd = (num) => {
//   return num % 2 != 0;
// };
// let n = prompt("Enter a number");
// console.log(isEven(n));
// console.log(isOdd(n));

// const object = {
//   message: "Hello,World",
//   getMeassage: function () {
//     console.log(this.message);//undefine
//   },
// };
// setTimeout(object.getMeassage, 1000);

//callback
// length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback, 1, 2); //4
//forEach method of array
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//   console.log(el);//1 2 3 4 5
// });

// let print = function (el) {
//   console.log(el); //1 2 3 4 5
// };
// arr.forEach(print);

//arr.forEach method for array of object
// let arr = [
//   {
//     name: "arvind",
//     marks: 95,
//   },
//   {
//     name: "mithun",
//     marks: 99,
//   },
//   {
//     name: "sonu",
//     marks: 98,
//   },
//   {
//     name: "nitesh",
//     marks: 100,
//   },
// ];

// arr.forEach((student) => {
//   console.log(student.name);
//   console.log(student.marks);
// });

//arr.map method
// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((num) => {
//   return num * num;
// });
// console.log(newArr);

//arr.filter method
// let arr = [1, 2, 3, 4, 5, 6, , 7, 8, 9];

// let oddNums = arr.filter((num) => {
//   return num % 2 != 0;
// });
// console.log(oddNums);

// let largeNums = arr.filter((num) => {
//   return num > 5;
// });
// console.log(largeNums);

//reduce method
// arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((res, el) => {
//   return res * el;
// });

// let res = arr.reduce((res, el) => {
//   if (el > res) {
//     return el;
//   } else {
//     return res;
//   }
// });

//check every num of array is multiple of 10 or not
// arr = [10, 20, 30, 40, 90, 50, 100];
// let ans = arr.every((el) => el % 10 == 0);

//Default parameters
// let ans = (a, b = 3) => {
//   return a + b;
// };
// ans(2);// a=2, b=3

// let ans = (a = 2, b) => {
//   return a + b;
// };
// ans(1); //a=1, b=undefined

//spread
// let chars = ["1", "2", "3", "4", "5"];
// let numbers = [6, 7, 8, 9, 10];
// console.log(chars, ...numbers);
// let newChars = [...chars];
// console.log(newChars);
// console.log(...newChars);

//allow function to take an idefinite number of inputs and bundle them in an array.
//Rest
// let sum = function sum(...args) {
//   return args.reduce((add, el) => add + el);
// };

// const minimum = (...args) => {
//   return args.reduce((min, el) => (el < min ? el : min));
// };

// function sum(...args) {
//   console.log(arguments); //arguments is the collection of all the arguments that is passed to function when it is called.
//   console.log(args.reduce((add, el) => add + el)); //args stores all the values in the array.
// }

//Destructuring
// let teams = [
//   "India",
//   "Newzeland",
//   "Australia",
//   "SouthAfrica",
//   "Pakistan",
//   "Afghanistan",
// ];
// let [winner, runnerup, ...others] = teams;

//destructuring objects
// const student = {
//   name: "peter",
//   class: 6,
//   age: 12,
//   subjects: ["Math", "Science", "Social Science", "English", "Hindi", "Telugu"],
//   username: "peter@123",
//   password: "don't know",
// };

// let user = student.username;
// let secret = student.password;

// const { username: user, password: secret } = student;//this is alternative of above two line

//square and sum the array elements using arrow function and then find avg.

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = arr.reduce((sum, el) => sum + el * el);
// console.log(ans / arr.length);

//create a newArr using map function whose each element is equal to the original element plus 5
// let newArr = arr.map((el) => el + 5);

//create a newArr whose element is in uppercase of original element.
// arr = ["a", "m", "z"];
// let newArr = arr.map((el) => el.toUpperCase());

//write a function called doubleReturnArgs which accepts an arr and
//varible number of arguments.The function should return a newArr with
//original array values and all the additional arguments.
// arr = ["a", "b", "c", "d", "e"];
// let doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((el) => el * 2),
// ];
// console.log(doubleAndReturnArgs(arr, 1, 2, 3, 4, "x", true, null));

// const stud = {
//   name: "john",
//   class: 10,
//   age: 15,
// };

// const teacher = {
//   name: "varun",
//   subject: "english",
// };

// let mergeObject = (stud, teacher) => {
//   return { ...stud, ...teacher };
//The spread operator (...) works with objects,
// but it does not iterate over them in the same way as arrays.
// Instead, it copies key-value pairs into a new object.
// };
