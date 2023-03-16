//constructor function in javascript 

function Alian(name,tech) { //constructor function
    this.name = name;
    this.tech = tech;
    
    this.work = function() {
        console.log('Solving bugs from 12 Hres')
    }
    
    }
    
    let alien1 = new Alian('sai', 'js');
    let alien2 = new Alian('kiran', 'js');
    
    console.log(alien1)
    
    alien1.tech = 'Blockchain';
    
    console.log(alien1)
    
    alien1.work();