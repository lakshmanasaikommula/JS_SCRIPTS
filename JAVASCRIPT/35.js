// for loop in objects

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
for(let key in alien)
{
    console.log(key, alien[key]);
    console.log(key, alien.laptop);



}













