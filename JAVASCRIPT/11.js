// JS NUMBERS 

var x = 123e5
console.log(x)
var x = 123e-5
console.log(x)

/* Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits. */ 

console.log(999999999999999)
console.log(9999999999999999)
console.log(0.3+0.2)
console.log('0.3' + ' ' + '0.2')
console.log(20 + '20')
console.log('20' + 20)
console.log(100/'10')
console.log(100/'apple')
console.log(-2/0)

var x= 500 
console.log(x)
var x= new Number(500)
console.log(x)

console.log(100=='100')
console.log(100 === '100')

var x = 123 
console.log((123).toString())
console.log(typeof(x))

var x = 9.656

console.log(x.toExponential(2));
console.log(x.toPrecision(2))
console.log(x.toFixed(1))
console.log(x.valueOf())

//Number()	Returns a number, converted from its argument.
//parseFloat()	Parses its argument and returns a floating point number
//parseInt()	Parses its argument and returns an integer

console.log(Number(new Date("1970-01-01")))

/* JavaScript MIN_VALUE and MAX_VALUE
MAX_VALUE returns the largest possible number in JavaScript.

Example
let x = Number.MAX_VALUE;
MIN_VALUE returns the lowest possible number in JavaScript.

Example
let x = Number.MIN_VALUE;
JavaScript POSITIVE_INFINITY
Example
let x = Number.POSITIVE_INFINITY;
POSITIVE_INFINITY is returned on overflow:

Example
let x = 1 / 0;
JavaScript NEGATIVE_INFINITY
Example
let x = Number.NEGATIVE_INFINITY;
NEGATIVE_INFINITY is returned on overflow:

Example
let x = -1 / 0;
JavaScript NaN - Not a Number
Example
let x = Number.NaN;
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example
let x = 100 / "Apple";

Number Properties Cannot be Used on Variables
Number properties belongs to the JavaScript's number object wrapper called Number.

These properties can only be accessed as Number.MAX_VALUE.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

Example
let x = 6;
x.MAX_VALUE */