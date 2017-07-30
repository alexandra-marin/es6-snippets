/***************** Args *****************/

function fun() {
	console.log(arguments[0]);
}
fun("coffee");

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

fun(); // done 1 2 3



/* *************** Scope *********************** */

var width = 10;
var shape = { width : 20 };

var showWidth = function() {
    console.log(this.width);
}; 

showWidth(); // undefined

shape.getWidth = showWidth;
shape.getWidth(); // 20
