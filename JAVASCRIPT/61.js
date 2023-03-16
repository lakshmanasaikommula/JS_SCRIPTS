//this 
// this means the object 

function getFastLaptop() {

    if(laptop1.ram > laptop2.ram) {
    console.log(laptop1);
}
else {

    console.log(laptop2)
}
}


let laptop2 = {
    brand: 'Lenovo',
    item: 'intel',
    ram: 8,
    bit:64,

    getConfig: function() {
        console.log(this.brand);
    }
}



let laptop1 = {
    brand: 'HP',
    item: 'intel',
    ram: 4,
    bit:32,

    getConfig: function() {
        console.log(this.brand);

    }


}

getFastLaptop(laptop1,laptop2);