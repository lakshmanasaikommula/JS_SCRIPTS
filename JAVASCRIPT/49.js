let alien = {
    name: 'Lakshman',
    tech: 'JS',
    age: 24,
    id: 25,
    laptop:{
        cpu: '12lenovo',
        ram: 8,
        brand:'Lenovo'
    }
}
console.log(alien);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);
console.log(alien.laptop.brand1);
delete alien.laptop
console.log(alien);
