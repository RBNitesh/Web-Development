class Bird {
  constructor(name) {
    this.name = name;
  }
  fly() {
    return `${this.name} are flying...`;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  fly() {
    return `${this.name} can't fly!`;
  }
}

let sparrow = new Bird("sparrow");
let dog = new Animal("dog");
// console.log(sparrow.fly());
console.log(dog.fly());
