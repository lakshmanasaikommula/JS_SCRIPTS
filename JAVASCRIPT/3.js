/* LET KEYWORD 
Cannot be Redeclared
Variables defined with let cannot be redeclared.
You cannot accidentally redeclare a variable.
With let you can not do this*/

let x = "John Doe";
//let x = 0;

//console.log(x)

// SyntaxError: 'x' has already been declared

/*Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:*/


{
  let x = 2;
  console.log(x)
}

{
    let x = 55
    console.log(x)
}

console.log(x)