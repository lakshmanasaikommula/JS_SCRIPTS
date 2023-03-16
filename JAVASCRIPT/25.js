// print count of charecters in a string 

const maxChar = (str) => {
    let obj = {};

    for(let char of str)
    (!obj[char])?obj[char]=1:obj[char]++;
    console.log(obj);
}

maxChar("hjhhbba%5kjhh")