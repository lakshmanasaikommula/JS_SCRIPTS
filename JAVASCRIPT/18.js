// iterating sets 

let nums = new Set();

nums.add(3);
nums.add(4);
nums.add(6);
nums.add(8);
nums.add('kommula');
nums.add('kommula');

nums.forEach(values => {
    console.log(values)
});

console.log(nums.has("kommula"));
