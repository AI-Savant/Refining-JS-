//********OBJECTS - Part 1****************//


//DECLARING, INITIALIZING Basic OBJECT via OBJECT LITERALS
const Person = Symbol("Key")
const Details = {
    Name : "Bhavesh Rajpurohit",
    Background : "Blockchain Developer",
    Degree : "Btech in Artificial Intelligence and Machine Learning",
    Age : 21,
    Ethnicity : "Indian",
    [Person] : "Key1",
}


//DECLARING, INITIALIZING Basic OBJECT via CONSTRUCTORS :-
const Details2 = new Object();
Details2.Name = "Anjali Yadav"
Details2.Age = 21

//Displaying (Object Constructor)
console.log(21)



//DISPLAYING (Object Literals)
console.log(Details)
console.log(typeof Details)
/*There are basically 2 ways to print the insider things*/
//First Method :- 
console.log(Details.Name)

//Second Method
console.log(Details.Name)

//Third Method :- Kewal Symbol vale Primitive datatype par hi kaam karegi
console.log(Details[Person])   //This is the only syntax of Symbol DataType

//For Changing 
Details.Degree  =  "Btech AIML"
console.log(Details)


//For Locking all the values
Object.freeze(Details)
Details.Age = 22
console.log(Details.Age) 

//For Inserting New Values inside the Object.
//Let's take an example that I want to insert a new value of signaure style
Details.Signature_Style = function() {
    console.log("The Signature Style of ${this.Details} is :- Damn!!!!!");
}

// console.log(Details.Signature_Style()) - There is a mistake in this. Will Update this later.



//We can also include Object into Objects, like multiple objects :- 
const D1 = {
    Age : 21,
    Name : {  
        FirstName : "Bhavesh",
        LastName : "Rajpurohit",
    Background : "AI Blockchain Development"

    }
}

console.log(D1.Name.FirstName)  //Chain Accessing hoti hai. 



//MERGIFICATION :-
const Object1 = {
    Name1 : "Bhavesh Rajpurohit"
}

const Object2 = {
    Name2 : "Anjali Yadav"
}

// console.log(Object, Object2)  - This is wrong
//Here is the correct method :- 
// const Object3 = Object.assign({}, Object1, Object2) - CORRECT, But we don't use it always. 
//Instead, We use Spread Method just like Arrays if we want to merge two Objects :- 
const Object3 = {...Object1, ...Object2}   // SPREAD Method to merge. 
console.log(Object3) //Will display the value of Object3



//Different type of Syntax - Only when we are receiving data from a Database and in that case it sends a huge amount of data then those all gets simply stored like this:-
//We say this syntax as an ARRAY of OBJECTS :- 
const Data = [
    //First Object
    {
        Name1 : "Bhavesh Rajpurohit",
        Age1 : 21,
        Background1 : "AI Blockchain Developer"
    },

    //Second Object
    {
        Name2 : "Anjali Yadav",
        Age2 : 21,
        Background2 : "Computer Vision"
    }
]

console.log(Data[0], Data[1])
//Like Later on you know all the things by round and round things.


//Specially Accessing a value :-
console.log(Object.keys(Details)) 
console.log(typeof Object.keys(Details))

console.log(Object.values(Details))
console.log(typeof Object.values(Details))


//CHECKING If SOMETHING IS IN THE OBJECT OR NOT :-
console.log(Details.hasOwnProperty("White"))  //Will give Boolean Output.




//Concept of DE-STRUCTURING of Values
const P1 = {
    Name : "Bhavesh Rajpurohit",
    Age : 21,
    Expertise : "AI - Blockchain Developer",
}

// console.log(P1.Expertise)  - Let's say ki aapko baar baar value ko access karna hai then are you going to use this long statement again and again?? Instead, You will use this method :- 
const {Expertise: Pehchaan} = P1   //Here with this method, we can now use the value without getting overwhelmed by writing whole long thing again and again.

console.log(Pehchaan) //Displayed the result

