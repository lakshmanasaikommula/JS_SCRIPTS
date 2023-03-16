// rest parameter 
// array seperated by space 

let words = " Hi hello! my name is lakshman komuala".split(' ');
console.log(words);

let [a,b,c,d,e,f,...g] = words;

console.log(a,b,c);
console.log(...g);