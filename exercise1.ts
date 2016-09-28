//use filter to return the names at even indexes
let jedi = ['Luke Skywalker', 'Darth Vader', 'Yoda', 'Darth Maul', 'Mace Wendu', 'Emperor Palpatine'];
function even(a,b){
    if(b%2 ===0 || b === 0){
        return a;
    }
}
var goodGuys = [];
goodGuys.push(jedi.filter(even,[]));
console.log(goodGuys);
//fat arrow and much more compact
let goodGuys1 = jedi.filter((item, idx, arr) => idx%2 === 0);
///******************************************************
//Create a product object named bread that includes a name field with the value "bread" and
//a price field with the value $2.33.
//******************************************************

let bread ={
	name: 'bread',
	price: '$2.33'
}

let product1 = {
	price: 3.25,
	calculateTax() {
		return this.price * .08;
	}
}
console.log("product1.calculateTax()\n" + product1.calculateTax());
//***********************************************************
//LOOPING FOR LOOPS
let animals:string[] = ["lion", "tiger", "bear"];
let animals2 = {
	tiger: "tiger",
	bear: "big bear",
	puppy: "Very cute"
}

for (let key in animals){
	console.log(`(for..in loop with array) index: ${key} value: ${animals[key]}`);
}
for (let key in animals2){
	console.log(`(for in loop with object)   index: ${key} value: ${animals2[key]}`);
}

//for..of just for arrays
for (let value of animals){
	console.log("for..of loop with array:   " +  value);
}


//random numbers

// returns random number between 0 to 1
function getRandom(){
    return Math.random();
}

// returns a random number between 0 to max value
function getRandomLessthan(max){
    return Math.random() * max;
}

// returns a number between min value to max value. does not include max value
function getRandomMinMax(min: number, max: number){
    return Math.floor(Math.random() * (max - min)) + min;
}
