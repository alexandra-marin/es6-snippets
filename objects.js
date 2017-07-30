/***************** OBJECT *****************/

// Objects can be:
// host objects (window, console)
// core objects (math, object, string, boolean, array, date, number, RegExp)
// custom objects

var weird = {} + {} // Nan



/***************** Creation *****************/

// #1 Literal
var coffee = {
    type: "espresso",
    milk: true,
    drink: (x) => {
        console.log(x);
    }
};

// #2 Constructor function
function Cup(drink) {
    this.type = drink; // this = the object created by the new keyword
    this.color = "white"; 
    this.drink = function() {
        console.log("Drinking from cup");
    }
}
var coffeeMug = new Cup(); // Cup { type: undefined }
var coffeeMug2 = Cup(); // undefined
                        // will set window color without new keyword

// #3  Object.create -> all others use this
var sameCoffee = Object.create(Object.prototype, {
    type: {
        value: "espresso"
    }
});

// #4 EcmaScript 6 style
class es6Coffee {
    constructor(milk) {
        this.milk = milk;
    }
    drink(when) {
        console.log(when);
    }
}

var c = class coff {
    constructor() {
        console.log("hello");
    }
};
new c();

/***************** Properties *****************/

// Get
coffee["type"]; // espresso
var props = Object.getOwnPropertyDescriptor(coffee, "origin");

// Add #1
coffee.origin = "Italy";

// Add #2
Object.defineProperty(coffee, "acidity", { 
    value: .5,
    writable: false, // applies to pointer, use freeze for whole obj
    enumerable: false, // don't return in props enumeration
    configurable: false // can't change it after (except writable prop)
 });

// Add #3
Object.defineProperty(coffee, 'taste', {
     get: ()      => { return this.taste  },
     set: (value) => { this.taste = value }
 });

// Object.create(coffee) creates a copy
// can set acidity because it's not on the original obj
var coffeeCopy = Object.create(coffee);
Object.defineProperty(coffeeCopy, "acidity", { 
    value: .1,
 }); 

// Add #4
var drinkName = "cappuccino";
var drinkPrice = 5;

var coffee = {
    [drinkName]: drinkPrice,
    get[drinkName] () {},
    set[drinkName] (value) {},
    
    ["mini-" + drinkName]: drinkPrice - 2,
    
    "drink me"() { 
        console.log(this) 
    }
}

// Delete
delete coffee.type;
console.log(coffee); // { milk: true, drink: [Function: drink] }

delete coffee.acidity; // error - not configurable
 
// Enumerate over props

Object.keys(coffee);     // milk, drink, origin
                         // no acidity!
JSON.stringify(coffee);  // same ^

var coffees = {a: 'Espresso', b: 'Macchiato', c: 'Latte'};
for (var key in coffees) {
    key; // a b c
    coffees[key]; // Espresso Macchiato Latte
}

// Invocation

coffee.drink("yum"); // yum
coffee.drink.apply("yum")// undefined
console.log(coffee.drink("yum")); //yum