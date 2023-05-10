



//  iterator declaration; run condition; increment expression
for (let i = 0; i <= 100; i++) {
    // Inside the loop -> Add code here
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log("FizzBuzz!")
    } else if (i % 3 === 0) {
            console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz"); 
    } else {
        console.log(i);
    }
}