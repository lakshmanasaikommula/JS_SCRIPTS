//lets talk about synchronous operations  in js 

console.log('hello')
console.log('this is lakshmana') 

//lets talk about asynchronous operations in js 

setTimeout(()=> {

    console.log('hello guys')

},5000)

setTimeout(()=>{
    
    console.log('hello users')
},3000);

//asynchronous functions always returns promise objects 
//it dosent matter what u return the returned value will always be promise 

const getOne = async => {
    return 
}

const Promise = getOne();
console.log(Promise)

//The await keyword will wait for promise to resolve once promise is resolved 
//it returns the parameter passed into the call 

const getTwo = async => {
    return
}

getTwo().then(value => {
    console.log(value)
})

//now use of await keyword 

const test = async => {
    const two = await getTwo();
    console.log(two)
};
test()
















