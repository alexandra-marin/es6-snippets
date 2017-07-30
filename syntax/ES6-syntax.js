/***************** HOISTING *****************/

console.log(hello); //undefined
var hello = "";

//console.log(helloo); // throws error
let helloo = ""; // no hoisting

function modify()
{
    hello = "oh hey";
    var hello;
}
console.log(hello); //""



/***************** LET KEYWORD *****************/

//Without let
let funcs = [];
for (var index = 0; index < 2; index++) {
    funcs.push( function() { return index } );
}
console.log(funcs[0]()); // 2

//With let
let funcs2 = [];
for (let index = 0; index < 2; index++) {
    funcs2.push( function() { return index } );
}
console.log(funcs2[0]()); // 0



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



/***************** Rest and spread / For of *****************/

let coffees = (...types) => console.log(types);
coffees("black", "latte"); // [ 'black', 'latte' ]

console.log(coffees.length); // 0 - ignored in arg count

let menu = [ 'black', 'latte' ];
let newMenu = [...menu]
console.log(newMenu); // [ 'black', 'latte' ]

newMenu = [..."latte"]; // or
newMenu = [..."latt", "e"];
console.log(newMenu); // [ 'l', 'a', 't', 't', 'e' ]

newMenu = Array(...[,,]); // or
newMenu = [...[,,]];
console.log(newMenu); // [ undefined, undefined ]

for(var c of menu)
{
    console.log(c); // black, latte
}

for(var c of newMenu)
{
    console.log(c); // undefined, undefined
}

for(var c of "latte")
{
    console.log(c); // 'l', 'a', 't', 't', 'e' 
}



/***************** Object literals *****************/

let drinkName = "cappuccino";
let drinkPrice = 5;

let coffee6 = {
    [drinkName]: drinkPrice,
    get[drinkName] () {},
    set[drinkName] (value) {},
    
    ["mini-" + drinkName]: drinkPrice - 2,
    
    "drink me"() { 
        console.log(this) 
    }
}

coffee6["drink me"](); // { cappuccino: 5, 'mini-cappuccino': 3, 'drink me': [Function: drink me] }



/***************** 8/2 literals *****************/

value = 0o10;
console.log(value);

value = 0b10;
console.log(value);



/***************** Template literals *****************/

console.log("Hello ${name}"); //???



/***************** Destructuring *****************/

numbers = [1, 2];
[one, two, three]     = numbers; // 1 2 undefined
[one, two, three = 3] = numbers; // 1 2 3

[ , skipped] = numbers; // a = 2

[head, ...tail] = numbers; // head = 1, tail = [2]

numbers = [1, [2]];
[head, [tail]]  = numbers; // head = 1, tail = 2

[min, max]  = "AZ"; // min = a, max = z

salary = {low: 10, high: 20, average: 15};
let s = {};
let {low : l, high: h, average: a} = s;
console.log(l); // ????
