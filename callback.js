/*Loops, Conditionals, and Functions Challenge
​
Challenge yourself by creating a callback function that detects whether a number is even, odd, or if it even is a number, and returns a value based on that information.
​
After you have implemented the number feature, create a loop that iterates from 0 to 10, and give the callback function the number the loop is currently on.
​
Create an `callback.js` file in the `challenges` directory to solve this challenge.
​
## Requirements
Here, you are given a boilerplate function called called 'callback'.
```js
let callback = (num) => {
    // Use this area to solve the challenge!
}
```
​
Your procedure is to modify the function to take in a number.
- When that number is even, the function should return `'the number is even'`.
- When that number is odd, the function should return `'the number is odd'`.
- When the number is neither even or odd, the function should return `'what is this?'`.*/



let callback = (num) => {
    // Find out if input (num) is a number
    // Find out if the input is Not a Number (NaN)
    let isNotANumber = isNaN(num);
    if (isNotANumber) { // Also written as (isNotANumber === true)
        return "What is this?";
    }
    // ------- We know that num is a number
    // console.log("Num is a number");

    // If it is a number, find out if it is even
    let remainder = num % 2 // modulus
    if (remainder === 0) {
        return "The number is even."
    } else 
        
        // If it is not even, then it is odd
    return "The number is odd.";
}

// true = 1, false = 0
let returnedValue = callback(true);
console.log(returnedValue);

console.log(callback(1337));
console.log(callback(42));
console.log(callback("Isaac"));
console.log(callback(false));
console.log(callback(NaN));

//  (iterator;  run condition; code after each loop)
for (let i = 0; i <= 10; i++) {
    console.log(callback(i));
}