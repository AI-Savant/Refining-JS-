//Concept of Conversion :- Here we will be studying about how to convert one data type to another data type with the help of certain functions.

//Examples :-
//This is going to be an integer value.
let Number = 21
console.log(typeof (Number))

//Now Convert this integer into string.
let NNumber = String(Number)
console.log(typeof (NNumber))

let isstudent = true
console.log(typeof isstudent)

let Nisstudent = Number(isstudent)
console.log(typeof Nisstudent)

//Notes :-
/* Things to be rememberd :- 
   21 => "21"
   21abc => NaN (means not a number but it is Number(integer))
   true => 1 and false => 0 */
