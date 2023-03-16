//JS STRINGS 

let a = 'Kommula Lakshmana Sai'

console.log(a.length)
console.log("We are the so-called \"Vikings\" from the north.")
//The backslash (\) escape character turns special characters into string characters:
console.log('It\'s alright.')
//The sequence \\  inserts a backslash in a string:
console.log("The character \\ is called backslash.")
let x = "ram" // string
let y = new String('sai') // object 
console.log(typeof(x))
console.log(typeof(y))
console.log(y)

/* Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results: */ 

let b = new String("John");
let c = new String("John");

console.log(x==y);
console.log(a.slice(0,12));
console.log(a.slice(-12, -1));
console.log(a.slice(10));
console.log(a.slice(-12));

let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));

z = 'Smart'
console.log(z.toLowerCase())
console.log(z.toUpperCase())
m = 'Hello'
n = 'World'

console.log(m.concat(' ', n))
t = '            Hello World!'
console.log(t.trim())

text = "5";
padded = text.padStart(4,"x");
padded1 = text.padStart(4,"0");

console.log(padded);
console.log(padded1);

let text11 = "5";
let padded11 = text11.padEnd(4,"x");
console.log(padded11)


let textt = "HELLO WORLD";
let char = textt.charAt(0);

console.log(char)
console.log(textt[1])

let e = "1,2,3,4"
console.log(e.split(","))


let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));
console.log(str.indexOf("test"));
console.log(str.indexOf("locate", 15));

console.log(str.search("locate"));

let texttt = "The rain in SPAIN stays mainly in the plain";
console.log(texttt.match(/ain/g));
console.log(texttt.match(/ain/gi));

let textttt = "Hello world, welcome to the universe.";
console.log(textttt.includes("world"));

/* Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string: */ 

console.log(`Hello World`)
console.log(`He's often called "Johnny"`)

console.log(`The quick
brown fox
jumps over
the lazy dog`)


let firstName = "John";
let lastName = "Doe";

console.log(`Welcome ${firstName}, ${lastName}!`);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`;

console.log(total)



