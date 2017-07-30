/* ***************** Prototype ********************* */

function Cup(drink) {
    this.drink = drink; // this = the object created by the new keyword
}
var coffeeMug = new Cup();

// Object.create creates a new function for each instance
// Prototype just links
// ES6 uses prototype

console.log(Cup.prototype);       // Cup {}
console.log(coffeeMug.__proto__); // Cup {}

Cup.prototype == coffeeMug.__proto__ // true: they point to same *in-memory object*

Cup.drink       = "tea";    // all instances have "tea" as drink if not otherwise set
coffeeMug.drink = "coffee"; // coffee mug has "tea" as proto drink
                            // and "coffee" as own drink

coffeeMug.hasOwnProperty("drink"); // true now

// Changing the protype
Cup.prototype.drink = "milk";
var milkMug = new Cup();
console.log(Cup.prototype.drink);       // milk
console.log(milkMug.__proto__.drink);   // milk
console.log(coffeeMug.__proto__.drink); // milk
console.log(coffeeMug.__proto__.constructor.drink); // tea

// Repalcing the prototype with new object
Cup.prototype = {drink : "water" };
var waterMug = new Cup(); // will refer to new proto
                         // coffeeMug and milkMug to the old
console.log(Cup.prototype.drink);       // water
console.log(waterMug.__proto__.drink);  // water
console.log(coffeeMug.__proto__.drink); // milk

