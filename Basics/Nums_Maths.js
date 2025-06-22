//***********************MATHS **************************/
//Javascript comes with a library of Maths

console.log(Math);
console.log(Math.PI)
console.log(Math.LN2)

//We will be using Maths There's a method of Math.random
console.log(Math.random())           //This method generates Random Nunber from 0 - 1 only.
console.log((Math.floor(Math.random()*10)+1))  
//Above we have multiplied in order to shift one digits forward and we added 1 because who knows if we have received a value like 0.03 then even after multiplying it with 10 will result into 0.3 and when we use "Math.floor" method then it will result into 0. So, that's why we have added 1 so that it will values from 1 to 9.

//In Many cases we have to define the Min and Max value while generating random values. So for that :- 

const min = 10
const max = 20
console.log(Math.floor(Math.random()) * (max-min+1) + min )




//There are a lot of methods and functions that you can use for Maths. 
//Here is the link to check out all those Methods and Functions :- 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math




//*******************************Numbers*********************** *//
const Age = 400
console.log(typeof Age)             //Act like a simple value of the Memory location and will not shows the type until we don't use 'typeof'

const Age1 = new Number(500)         //Act as an Object and specifically shows type while displaying the value of the memory location
console.log(Age1)

//Numbers too have a lot of functions and methods to perform....
//Here is the link to go through all of them :- 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number