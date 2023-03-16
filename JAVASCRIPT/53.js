//lets talk about schedulers 

// setInterval() which is a callback function 
//that is called repeatedly at the specified 
//interval of time 
let uniqueId = null;
let counter = 0;

uniqueId = setInterval(function(){

    console.log('ram');
    counter = counter + 1;
},4000);

uniqueId = setTimeout(function(){
    console.log(counter);
    counter = counter + 1
},10000);