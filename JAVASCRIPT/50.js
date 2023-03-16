// operators in javascript 

console.log(5>6);
console.log(5 == 6);
console.log(5 == 5);
console.log(5 == 'five')
console.log('five' == 'six');
console.log('five' == 'five');
console.log('five' === 'six')

let x = 'pen'
let y = 'pencil'
console.log(x<y);

a = 3
b = '3'
console.log(a == b); // equals to
console.log(a === b); // strict equals to 

let p = 3
let q = 4
let r = 5 
let result = (p<r) && (p>q) // bitwise and operator 
let result1 = (p<r) || (p>q) // biwise and 
let result2 = (p>r) != (p>q)
console.log(result)
console.log(result1, result2)