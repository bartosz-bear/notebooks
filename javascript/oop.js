// CONSTRUCTOR FUNCTION

// constructors are functions that create new objects
// they define properties and behaviors that will belong to the new object
// blueprint for the creation of new objects

// constructors are defined with a capitalized name to distinguish them from
// other functions that are not constructors

function Dog() {
  this.name = 'Snoop',
  this.color = 'Pink',
  this.numLegs = 4
}

console.log(Dog.numLegs); // returns undefined (object wasn't instantiated yet)

// NEW KEYWORD
// keyword new is used to create an instance of an object by calling a constructor

const hound = new Dog();

console.log(hound.numLegs); // returns 4

hound.name = 'Stjepan';

console.log(hound.name);

// CONSTRUCTOR FUNCTION WITH ARGUMENTS

function Dog2(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

const terrier = new Dog2('Olo', 'Purple');

// VERIFY IF AN OBJECT IS AN INSTANCE OF A PARTICULAR CONSTRUCTOR

// 'instance' instanceof 'constructor'

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(4);

console.log(myHouse instanceof House);

// CHECK IF AN INSTANCE HAS A PROPERTY

console.log(terrier.hasOwnProperty('color'));
console.log(terrier.hasOwnProperty('numLegs'));

// ADD PROPERTIES TO EXISTING OBJECT CONSTUCTURO WITH PROTOTYPE

Dog2.prototype.numHead = 1;

console.log(terrier.numHead);

// ITERATING OVER OWN AND PROTOTYPE PROPERTIES

// Own properties - defined inside an object constructor
// Prototype properties - defined using Object.prototype syntax

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// CONSTRUCTOR PROPERTY

let duck2 = new Bird();

console.log(duck2.constructor);

function Dog3(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog3) {
    return true;
  }
  return false;
}

// ADDING SEVERAL PROPERTIES AND METHODS TO A PROTOTYPE

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// SET THE CONSTRUCTOR PROPERTY WHEN CHANGING THE PROTOTYPE

Bird.prototype = {
  constructor: Bird, // HERE
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

// ISPROTOTYPEOF()

function Bird0(name) {
  this.name = name;
}

let duck22 = new Bird0("Donald");

console.log(Bird0.prototype.isPrototypeOf(duck22));

// DRY - Don't Repeat Yourself

// we can create a superclass which shares a common method of different
// classes. This way we won't repeat writing the same method for different
// classes

// INHERIT BEHAVIORS FROM A SUPERTYPE

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

let animal = Object.create(Animal.prototype);

// CREATE A PROTOTYPE FROM ANOTHER PROTOTYPE

function Horse() {}

Horse.prototype = Object.create(Animal.prototype);

// RESETTING INHERITED CONSTRUCTOR PROPERTY

function Lion() {}
Lion.prototype = Object.create(Animal.prototype);

let lion = new Lion();
console.log(lion.constructor);

Lion.prototype.constructor = Lion;

console.log(lion.constructor);

// ADDING METHODS TO A PROTOTYPE

Dog.prototype.bark = () => console.log('Woof!');

// OVERRIDING INHERITED METHODS

// overriding inherited methods is done the same way as defining new methods

function Animal23() {}

Animal23.prototype.eat = () => 'nom nom nom'

function Bird23() {}

Bird23.prototype = Object.create(Animal23.prototype);
Bird23.prototype.constructor = Bird23;
Bird23.prototype.eat = () => 'peck peck peck';

// MIXINS

// mixins allow other unrelated objects to use a collection of functions

let bird = {
  name: 'Donald',
  numLegs: 2
}

let plane = {
  model: '777',
  numPassengers: 524
}

let flyMixin = function(obj) {
  obj.fly = () => console.log('Flying, wooosh!')
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

// USING CLOSURE TO PROTECT PROPERTIES WITHIN AN OBJECT

function Bird333() {

  let weight = 15; // this is a private property, protected by closure

  this.getWeight = () => weight;
}

// CLASSES

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `${this.name} says hello`;
  }
}

const hero1 = new Hero('Varg', 1);

console.log('Whoof', Object.getPrototypeOf(Hero));

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const hero2 = new Mage ('Lejon', 2, 'Magic Missle');