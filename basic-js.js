/* **************** Inits ********************** */

var something = "hi";
var something = "hello";

foo = "bar";

const somethingElse = "must init this one!";
let moreSomething;



/* **************** Logs ********************** */

console.log("Hello");
console.warn("Hello");
console.error("Hello");
//confirm("Hello");
//prompt("Hello");
//alert("Hello");



/* ****************** DATA TYPES ******************** */

// Bool

console.log(typeof(true)); // boolean
console.log(typeof(1)); // number
console.log(typeof('true')); // string

console.log((false == 0))  // true
console.log((false === 0)) // false

console.log((false == " "))   // true
console.log((false === " ")) // false

console.log((0 == " "))  // true
console.log((0 === " ")) // false

console.log((undefined == null))  // true
console.log((undefined === null)) // false

console.log((undefined == false)) // false
console.log((undefined == 0))     // false

console.log((null == false))      // false
console.log((null == 0))          // false

console.log((null == NaN))        // false
console.log((NaN == NaN))         // false

/* ************************************** */

// Number

console.log(null * 42); // 0
console.log(NaN + 1); // NaN
console.log(undefined + 2); // NaN
console.log(1 + 5 + " bottles of milk"); // 6 bottles of milk
console.log(1  / 5); // 0.2
console.log(1.6 / 50); // 0.032
console.log(1.6 / 50 == 0.032); // true
console.log(1.23456.toFixed(2)); // 1.23
console.log(1.23456.toPrecision(2)); // 1.2
console.log(1.23456.toPrecision(5)); // 1.2346

/* ************************************** */

// String
console.log(2 + "2"); // 22: String concatenation
console.log("seven" * "nine"); // Nan
console.log("seven" * 3); // Nan

/* ************************************** */

// Symbol
var symbol1 = Symbol("foo");
var symbol2 = Symbol("foo");
console.log(symbol1 == symbol2); // F
console.log(symbol1 === symbol2); // F
console.log(String(symbol1) == String(symbol2)); // T

var symbol3 = symbol2;
console.log(symbol3 == symbol2); // T
console.log(symbol3 === symbol2); // T

/* ************************************** */

// Null: Value does not exist
typeof(null); // object
Number(null); // 0

/* ************************************** */

// Undefined: Value has not been defined
console.log(typeof(randomUndefinedType)); // undefined

/* ************************************** */

// Array
var notSoSmartArray = ['foo', 'bar'];
notSoSmartArray.length = 1;
console.log("Array is now: " + notSoSmartArray);

var length = notSoSmartArray.push("bazz"); // push to end
console.log("Array is now: " + length + " : " + notSoSmartArray); // 2 : foo,bazz

notSoSmartArray.pop(); // pops last element
console.log("Array is now: " + notSoSmartArray); // foo

notSoSmartArray.splice(0,1); // remove one from first position

var weird = [] + [] // ""
var weird = [] + {} // {}
var weird = {} + [] // 0



/* **************** Inheritance chain ********************** */

// ES6 version

class Animal {
    constructor(voice) {
        this.voice = voice || "no voice";
    }
    speak() {
        console.log(voice);
    }
}

class Cat extends Animal {
    constructor() {
        super("Meow");
    }
}

/* ************************************** */

//Random returns between 0 and 1
var random = Math.random();
console.log(random);

//var re = /pattern/flags

// matching + toString
randomFunction = "hey";
function randomFunction () { var x = 0; }
console.log(randomFunction.toString()); // function randomFunction() { var x = 0; }
