/* "I will call back later!"

A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
A call back function is a function which is to be executed after another function
execution completed */

function myFunction1(a,b){
    console.log(a+b)
}
function myFunction2(a,b) {
    console.log(a-b)
}
myFunction1(2,2);
myFunction2(2,2);
