//OBJECTS 

/*Real Life Objects, Properties, and Methods
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:

Object	Properties	Methods*/
let car = {}
car.name = 'Fiat'

car.model = 500

car.weight = 850

car.color = 'white'
/*car.start()

car.drive()

car.brake()

car.stop()*/

/* All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

JavaScript Objects
You have already learned that JavaScript variables are containers for data values.

This code assigns a simple value (Fiat) to a variable named car: */

//let car = "Fiat";

/*Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to a variable named car: */

//const car = {type:"Fiat", model:"500", color:"white"};

//const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };*/

function my(firstName, lastName) {
  return firstName + " " + lastName;
}
a = my('sai', 'kommula')
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: a
};

console.log(person)