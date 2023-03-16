// reverse a string 1 

const revString = (str) => {
    const arr = str.split('');
    arr.reverse();
    str = arr.join('');
    console.log(arr.reverse())
    console.log(str);

}

revString("apple, banana, pinaple")