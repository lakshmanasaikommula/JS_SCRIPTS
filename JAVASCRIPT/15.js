//JSON
//javascript object notation 
//lets discuss about this 

let profile = {
    name:'ram',
    age:23,
    city:'hyderabad'
}

let profile1 = JSON.stringify(profile);
console.log(profile1);
console.log(typeof(profile1));
let profile2 = JSON.parse(profile1);
console.log(profile2);
console.log(typeof(profile2));