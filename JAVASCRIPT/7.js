// JS FUNCTIONS 
//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it). 

function myFunction(p1, p2) {
    return p1 * p2;
}
console.log(myFunction(2,3))  // this is a simple function 

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
console.log(x)


/* Why Functions?
You can reuse code: Define the code once, and use it many times.
You can use the same code many times with different arguments, to produce different results.
Example
Convert Fahrenheit to Celsius */

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(32))

/*The () Operator Invokes the Function
Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.
Accessing a function without () will return the function object instead of the function result. */


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(42));

/* Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
Example
Instead of using a variable to store the return value of a function:*/

function fn(a,b,c){
  return 'hello ' + a + ' hello ' + b + ' hello ' + c 
}

console.log(fn('var', 'let', 'const'))