//storage mechanisms
//client side storage which is local storage
//server side storage DBMS 

localStorage.setItem('name','ram');
localStorage.setItem('age',25);
localStorage.setItem('city','Hyderabad');

//so we are set objects to local storage now, the quetion is how will the data get for this 

let name = localStorage.getItem('name');
console.log(name);