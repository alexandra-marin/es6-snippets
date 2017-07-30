/***************** SYMBOLS *****************/

//Act like Guids
var sym1 = Symbol("coffee");
var sym2 = Symbol("coffee");
console.log(sym1 === sym2) // false


//Get the same guid
var sym3 = Symbol.for("latte"); // get from registry or create a new symbol
var sym4 = Symbol.keyFor(sym3);
console.log(sym4) // latte


//Use as property
var coffee = {
    [Symbol.for('coffee')]: 'My coffee'
};

var value = coffee[Symbol.for('coffee')]; 

console.log(value); // My coffee
console.log( Object.getOwnPropertyNames  (coffee) ); // []
console.log( Object.getOwnPropertySymbols(coffee) ); // [ Symbol(coffee) ]



/***************** OBJECT *****************/

var latte = {
    name: "Latte",
    price: 5
};

var chai = {
    name: "Chai Latte",
    milk: "Almond"
};

Object.setPrototypeOf(latte, chai);
console.log(latte.milk); // Almond

var coffee = {};
Object.assign(coffee, latte); // doesn't look down the prototype
console.log(coffee); // { name: 'Latte', price: 5 }

var coffee = {};
Object.assign(coffee, latte, chai); // merges and saves last 'name'
console.log(coffee); // { name: 'Chai Latte', price: 5, milk: 'Almond' }


//Equality
console.log(NaN == NaN);          // false 
console.log(Object.is(NaN, NaN)); // true

console.log(0 == -0);         // true
console.log(Object.is(0,-0)); // false 

var s = 'NaN'; 
console.log(isNaN(s));        // true
console.log(Number.isNaN(s)); // false 

var s = '8000'; 
console.log(isFinite(s));        // true
console.log(Number.isFinite(s)); // false 


/***************** Functions *****************/

var coffee = {
    name: "latte",
    drink: function () { console.log(this) }
}
console.log(coffee.name);        // latte
console.log(coffee.drink.name);  // drink


/***************** Functions *****************/

class Coffee {
    constructor() {
         console.log('Coffee ctor');
         console.log(new.target);
         let ice = true;
         this.icy = true;
    }
}

class IceCoffee extends Coffee {
    constructor() {
         super(); // Error if not present 
         console.log(new.target);
    }
    drink() {return 1} // Error b/c static
}

var c = new IceCoffee(); // Coffee ctor
console.log(c.ice); // undefined
console.log(c.icy); // true

c.drink();

Coffee.temp = 0;
console.log(c.temp); // undefined
var c = new IceCoffee(); // Coffee ctor
console.log(c.temp); // undefined
//Why still undefined? Because:
console.log(c.__proto__); // IceCoffee {}
console.log(c.__proto__.__proto__.constructor.temp); // 0

var coffee = new Coffee(); // { [Function: Coffee] temp: 0 }
var coffee = new IceCoffee(); // [Function: IceCoffee] x 2