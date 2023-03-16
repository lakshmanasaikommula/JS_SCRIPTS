//Array methods 

let array = [1,2,3,4,5,6,7,8,9]

//splice() 


array.splice(2,2);
console.log(array);
array.splice(2,2,0,0,0,0);
console.log(array);

//find index 

let itemIndex = array.findIndex(function(eachItem) {

    console.log(eachItem);

});


let nums = [1,2,3,4,5,6,7]

nums.forEach(values=>{
    console.log(values)
})



















