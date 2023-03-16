//ABOUT VAR KEYWORD 
//Redeclaring a JavaScript variable with var is allowed anywhere in a program:

var x = 2;
console.log(x)
// Now x is 2

var x = 3;
console.log(x)
// Now x is 3

/* Redeclaring Variables
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block*/

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

console.log(x)

// Here x is 2