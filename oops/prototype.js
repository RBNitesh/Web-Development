let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let abcHardware = {};

// console.log(`lenovo`, lenovo.__proto__);

//another way to inheriting properties
let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, Object.getPrototypeOf(tesla));

//it's check the propery is it's own or inherited
// console.log(tesla.hasOwnProperty("driver"));
// console.log(tesla.hasOwnProperty("tyres"));
