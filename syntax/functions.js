/***************** Args *****************/

function hello() {
	console.log(arguments[0]);
}
hello("coffee"); //coffee



/***************** Overloading *****************/

function fun(a) {
	console.log("#1");
}
function fun(a, b) {
	console.log("#2");
}
function fun(a, b, c) {
	console.log("#3");
}

fun("coffee"); // #3
fun("hello", "goodbye"); // #3
fun("hello", "goodbye", "hello", "goodbye"); // #3 - 4th argument ignored



/***************** Timeouts *****************/

var fun = function() {
    // min timeout = 4ms
    // all timeouts wait for func to exit
	setTimeout(function() { console.log("1"); }, 0);
	setTimeout(function() { console.log("2"); }, 0);
	setTimeout(function() { console.log("3"); }, 0);
	console.log("done");
};

fun(); // done (...) 1 2 3



/* *************** Scope *********************** */

var width = 10;
var shape = { width : 20 };

var showWidth = function() {
    console.log(this.width);
}; 

showWidth(); // undefined

shape.getWidth = showWidth;
shape.getWidth(); // 20



/***************** Arrow function *****************/
//Don't create a new scope

let coffee = {
    name: "latte",
    drink: function () { console.log(this) }
}

let coffee2 = {
    name: "latte",
    drink: () => console.log(this) 
}

let proto  = coffee .drink.hasOwnProperty("prototype");
let proto2 = coffee2.drink.hasOwnProperty("prototype");
console.log(proto ); // true
console.log(proto2); // false

coffee .drink()  ; // { name: 'latte', drink: [Function: drink] }
coffee2.drink()  ; // {}, context obj

let coffee3 = {
    name: "latte",
    drink: function () { 
        return () => console.log(this)
    }
}

let coffee4 = {
    name: "decaf",
    drink: function () { 
        return () => console.log(this)
    }
}

coffee3.drink()(); // { name: 'latte', drink: [Function: drink] }
                   // but that's the context obj now
coffee3.drink()
       .bind(coffee4) // will not bind!
       (); // { name: 'latte', drink: [Function: drink] }

coffee3.drink()
       .call(coffee4) // { name: 'latte', drink: [Function: drink] }
                      // will not bind either

//All together now

let name = "latte";
let coffee5 = {
    name: "cappuccino",
    drink1() { 
        console.log(this.name) // cappuccino
        console.log(name)      // latte
        console.log(this)      // { name: 'cappuccino', ... }
    },
    drink2: function () { 
        console.log(this.name) // cappuccino
        console.log(name)      // latte
        console.log(this)      // { name: 'cappuccino', ... }
    },
    drink3: () => { 
        console.log(this.name) // undefined
        console.log(name)      // latte
        console.log(this)      // { }
    }
}

coffee5.drink1();
coffee5.drink2();
coffee5.drink3();



/***************** Default function params *****************/

let getCoffee = (no = 1 , order = "coffee") => {
    console.log(no + " " + order);
}

getCoffee();                   // 1 coffee
getCoffee(undefined, "latte"); // 1 latte
getCoffee(null, "latte");      // null latte


//Inner function can access anything from outside
let payCoffee = (price, tax = price * .7) => {
    console.log(price + tax);
}

let base = .7;
let payCoffee2 = (price, tax = price * base) => {
    console.log(price + tax);
}

let base2 = () => .7;
let payCoffee3 = (price, tax = price * base2()) => {
    console.log(price + tax);
}

payCoffee (3); // 5.1
payCoffee2(3); // 5.1
payCoffee3(3); // 5.1



/***************** Dynamic function *****************/

let getTotal = new Function("price = 20", "return price");
getTotal(); // 20
