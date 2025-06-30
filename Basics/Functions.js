//******FUNCTIONS********//
/*It is a Block of code that you can use it anywhere without writing the entire code again and again.*/
function Sum(n1,n2) {
    console.log(n1+n2)
}

Sum(3,3) //This will print 6. 


//FACTS ABOUT FUNCTIONS :- 

//Difference between Arguements and Parametres :- 
/*Parameters are the values that you put inside the round brackets when you are declaring and defining the function.
Like this :- function Multiply (n1,n2) {}. 

Whereas Arguements are the real values that you insert while calling the function outside. Like this :- Multiply(3,3). Here we have put the real values.

//Anything after returning something will not be displayed :- 
function Divide (n1,n2) {
      let Result = n1/n2
      return Result
      console.log("Bhavesh Rajpurohit")    //This will not be working.
} */

//Let's Learn something more. Got it? 
function LoggedIn (Username) { 
 console.log(`${Username} has just loggedin into the system`)
}
 
    
LoggedIn("Bhavesh Rajpurohit")
LoggedIn()   //Here you have not entered anything and In that case output will be "undefined".

//Now the concept is ki How to pass multiple things in a functions?? 
function Cart  (...num1) {
    return num1  
}

console.log(Cart(1,2,3,4,5,6,7,8))     

//We have to use the "Rest operator" if we want to pass the multiple values in the function. Rest Operator is same Spread Operator and it fully depends upon the condition. 



//How to use or pass Object in a Function? 
//Let's create an object first :- 
const Details = {
    Name : "Bhavesh Rajpurohit",
    Age : 21,
    Background : "Artificial Intelligence and Blockchain Technologies"
}

function HandleObject (anyobject) {
    console.log(`Username is ${anyobject.Name} and price that he had paid to become expert in ${anyobject.Background} is his hardwork and patience`)
}

HandleObject(Details) 
//or we can also create some another object like this :- 
HandleObject({
    Name : "Anjali Yadav",
    Background : "Artificial Intelligence and Computer Vision"
})



//How to use Arrays in a Functions??
//Let's create an Array :- 
const Amount_in_$ = [200000,300000,40000,500000]   

function D (givenArray) {
    return givenArray[1]
}

console.log(D(Amount_in_$))
