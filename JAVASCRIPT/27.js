// call back functions 
//passing functions as an arguments 

function displayGreeting(displayName) {

    console.log('Hello');
    displayName()
    console.log('Good Morning')
}

displayGreeting(function() {

    console.log('Rahul');
})