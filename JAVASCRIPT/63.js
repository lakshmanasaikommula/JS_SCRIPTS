// identifiers 
// is like a variables to store the data 

// lets talk about valid identifiers are 
//firstName  $firstname _firstName firstName12 

//lets talk about invalid identifiers 
//12firstname  firstName 12 

// now lets talk about objects
// object is a collection of a properties 

let person = {
    name: "sai",
    age: 23,
    gender: 'Male',
    city: 'mamidikuduru',
    college: 'depthi',
    habbits: ['criket','football','tv','badminton','vallyball'],
    run: function() {
        console.log('Start Running')
    },
}

person.run();

console.log(person)
console.log(person.age); // dot notation
console.log(person['city']); // bracket notation

person.id = 1122; // adding properties
console.log(person);

person['subject'] = 'CSE'
console.log(person);

console.log(person.habbits[2]);