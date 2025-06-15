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





//****************************************************** */

//MEMORIES :- Stacks and Heaps

//STACK Memory :- All the PRIMTIVE DATATYPES Stores here. We exactly get the Copies here. 
//HEAP Memory  :- All the NON-PRIMTIVE DATATYPES Stores here. We exactly get References of the values here

/*Let's understand this with the help of examples :- */

//The Below Examples are Gets stored in Stack Memory cuz they are Primitive Datatypes
// const NameofUniversity = "Jodhpur Institute of Engineering and Technology"
// const Student = NameofUniversity 
// console.log(Student)
//Here Output will be the value of NameOfUniversity


//But What if I do like below method :- 
// const NameOfUniversity = "Jodhpur Institute of Engineering and Technology"
// const Student = NameOfUniversity 
// Student = "Bhavesh Rajpurohit" 

//Now the question is that what will be the value of Student?? Will it be as same as the earlier? or it will be the new value???? Cmmon Let's See :-
// console.log(Student)
//So Output will be :- Bhavesh Rajpurohit 


//So exactly what is happening here is the second variable got the copy of the first variable instead of the Original one. And when we have changed the value of Second variable then it has'nt affected the value of the First Variable. It Just Modified the value of the copy of the First Variable. 
//THIS IS WHY WE SAY THAT WE GET COPIES IN THE STACK MEMORY 

//**************HEAP MEMORY*************//
//Non-Primitive Datatypes gets stores here in the Heap Memory
//We get the direct references of the values of the variables here.

const Details1 = {
    Name : "Bhavesh Rajpurohit", 
    Age : 21, 
    Email : "rajpurohitbhavesh2004@gmail.com"
}

const Details2 = Details1
Details2.Email = 'rajpurohitbhavesh2027@gmail.com'
console.log(Details1)
console.log(Details2)

//As you are seeing that If you first assign the Second variable = First variable then no doubt the value of second variable is same as the value of the first variable but when you try to change the assigned value in Second Variable then it will also change the value in the First variable as well. 

//THIS IS WHY HEAP MEMORIES GIVES US REFERENCES OF THE VALUES OF THE VARIABLES (MEMORY LOCATIONS) AND STACK MEMORY GIVES THE COPY OF THE VALUE OF THE VARIABLES (MEMORY LOCATION)