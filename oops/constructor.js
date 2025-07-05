function tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes the sound`;
};

let dog = new Animal("dog");
// console.log(dog);
// console.log(dog.species);
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with the new");
  }
  this.name = name;
}

let water = new Drink("water");
// console.log(water);

let coffee = Drink("coffee");
