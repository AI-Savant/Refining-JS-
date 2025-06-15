//***********************DATATYPES******************
/*Datatypes in Javascript are classified into 2 categories :-
1. Primitive Datatypes
2. Non - Primitive Datatypes (also called Reference Datatypes) 
*/

//PRIMITIVE DATA TYPES :- strings, number, booleans, null, undefined, symbol, bigint 
const Name = "Bhavesh Rajpurohit"   //String
const Age = 21                      //Number
const Percentage = 98.2             //Again Number. Javascript has not the concept of floating datatypes.
const Temprature  = null            //null
let Mission;                      //undefined
const ID = Symbol(123)              //Symbol - Used to give uniqueness to a particular value.  
const networth  = 9999999999999999999999999999999999999999999999999999999999999999999999999999999n           //BIG-INT 
  



//NON-PRIMITIVE DATATYPe :- Arrays, functions, objects
const Fruits = ["Banana", "Apples", "Papaya", "Guava", "Strawberry", "Peaches"]   //ARRAYS 


const MyFunction = function() {                                                                //Functions
    console.log('Bhavesh Rajpurohit, An AI Blockchain Developer')
}

 
const Object = {                                                   //OBJECT
    Name : "Bhavesh",                                                
    Age  : 21,
    Profession : "Blockchain Developer"
}


console.log(typeof Object)
console.log(typeof MyFunction)
console.log(typeof Fruits)