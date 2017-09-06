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
