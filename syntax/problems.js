/***************** Missing bracket problem *****************/

function hello() {
	return;
	{
		hi: "hello";
	}
}

function hello2() {
	return {
		hi: "hello"
	};
}

console.log(hello()); //undefined
console.log(hello2()); //{ hi: 'hello' }

/***************** Hoisting problem *****************/

//expression(); //error
func();

var expression = function() {
	// will be hoisted
	console.log("hi");
};
function func() {
	console.log("hi");
}

/***************** Duplicate problem *****************/

function func(x, x, x) {
	console.log(x);
}

/***************** This problem *****************/

var coffee = {
	name: "latte",
	drink: function() {
		console.log(this.name);
	}
};

var coffee2 = {
    name: "chai latte"
}

coffee2.drink = coffee.drink;
coffee2.drink(); // chai latte

// or
coffee.drink.bind(coffee2);
coffee2.drink(); // chai latte

// Bind
// #1
var coffee = function() {
	this.name = "latte";
	this.drink = function() {
		console.log(this.name);
    };
    this.delayDrink = function() {
		setTimeout(this.drink, 100);
	};
};

var coff = new coffee();
coff.drink(); // latte
coff.delayDrink(); // undefined

// #2
var coffee = function() {
	this.name = "latte";
	this.drink = function() {
		console.log(this.name);
    };
    this.delayDrink = function() {
		setTimeout(this.drink.bind(this), 100);
	};
};

var coff = new coffee();
coff.drink(); // latte
coff.delayDrink(); // latte

// #3
var coffee = function() {
    that = this;
	that.name = "latte";
	that.drink = function() {
		console.log(that.name);
    };
    that.delayDrink = function() {
		setTimeout(that.drink, 100);
	};
};

var coff = new coffee();
coff.drink(); // latte
coff.delayDrink(); // latte



/***************** ParseInt problem *****************/

console.log(parseInt('null', 24)); // 23
console.log(parseInt('null', 31)); // 714695