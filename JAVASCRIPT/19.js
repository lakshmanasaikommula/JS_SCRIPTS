//callback function 
// it is a function is passsed as an argument to another function 

function displayGreeting(displayName) {
    console.log('Hello');
    displayName();
    console.log('Good Morning');
}

function displaySai() {

    console.log('Sai')
}

displayGreeting(displaySai);


