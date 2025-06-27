//***************************Arrays - Part 2 ******************/

const Fruit = ["Banana", "Mango", "Grapes"]
const Vegies = ["Cauliflower", "Brinjal", "Cucumber"]

// Fruit.push(Vegies)
// console.log(Fruit) 
// console.log(Fruit[3][2])

// const Nutrients = Fruit.concat(Vegies)
// console.log(Nutrients)

//Spreading Method of Javascript
const Diet = [...Fruit, ...Vegies]
console.log(Diet, typeof Diet)

//Rare Cases :- 
const Heroes = ["Thor", "Superman", "Hulk", ["IronMan", ["Flash", "Antman", "WonderWoman"]]]
console.log(Heroes)
//Now to fix them :- 
console.log(Heroes.flat(Infinity))


console.log(Array.isArray("Bhavesh"))
console.log(Array.from("Bhavesh"))
console.log(Array.from({name: "Bhavesh"}))  //Interesting Case cuz here it will not get converted to array because we need to tell that which thing should gets converted to Array format. "name" which is key or Bhavesh which is the "value" of the key "name"

let M1 = 100;
let M2 = 200;
let M3 = 300;

const D1 = [];
D1.push(M1,M2,M3)
console.log(D1)

