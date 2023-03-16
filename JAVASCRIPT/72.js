// getting even and odd numbers 

let nums = [1,2,3,4,5,6,7,8,9];

nums.filter( n => n%2 === 0)
    .forEach( n => {
         console.log(n);
       });