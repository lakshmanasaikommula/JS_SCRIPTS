/*How to Create a Set
You can create a JavaScript Set by:

Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables
The new Set() Method
Pass an Array to the new Set() constructor:*/

// Create a Set
const letters = new Set(["a","b","c","d","e"]);
console.log(letters)

/*How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
The new Map() Method
You can create a Map by passing an Array to the new Map() constructor:*/

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits)


  //arrow function 
let myFunction = (a,b,c) => {
   return a * b *c
}
console.log(myFunction(5,5,6));


let myFunction1 = (a) => {
   return 'this is my age '+ a 
}
console.log(myFunction1(24));

const person_details = [
   {firstname:'sai',lastname:'kommula'},
   {firstname:'hari',lastname:'kommula'},
   {firstname:'suri',lastname:'kommula'},
]



function getFullName(item) {
   return [item.firstname, item.lastname].join(" ");
}

console.log(person_details.map(getFullName))