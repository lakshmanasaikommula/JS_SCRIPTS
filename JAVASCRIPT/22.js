// reverse a string 2 

(function(str) {
    let reversed = "";
    for(let char of str)
    {
        reversed = char + reversed
    }
    console.log({reversed})
})("Greetingss")


const revString = (str) => {
    let reversed = "";
    for(let char of str)
    {
        reversed = char + reversed
    }
    console.log(reversed)
    console.log({reversed})
}
revString("Greetingss")