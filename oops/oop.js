class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    return `${this.model} is an amazing ${this.make}`;
  }
}

let car = new Vehicle("Car", "RR", 1875);
// console.log(car.start());

class Car extends Vehicle {
  drive() {
    return `${this.model} : This is an example of inheritance`;
  }
}

let toyota = new Car("Toyota", "carlo25", 1990);
console.log(toyota.model);
console.log(toyota.drive());
