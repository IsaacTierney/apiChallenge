/* Longest Name Detector
​
Create an array of names. It can be random names, pokemon names, super hero/villain names, etc.
​
Write a loop that goes through (iterates) the array and checks the length of each name.
​
After the loop is complete, log to the console the longest name in the array. If there is a tie log at least one of the longest names. For bonus knowledge, go ahead and log both.
​
To do this you will need to store the length of the previously longest name in order to compare it to the next iteration.
​
Extra challenge: find both the longest and shortest name.
​
Example array:
let heroes = ["Celestial Pacer", "Compudroid", "Galacticdroid", "Ghost Baroness", "Pelt Warrior", "Night Cancellor", "Serpent Shadow", "Barkborn", "Smash Mouth", "Mouth Fool"];
​
Example result:
//Two names have 15 characters (including the space) so I'd either log one or both
[ 'Celestial Pacer', 'Night Cancellor' ]
*/

// Step 1 is find out how many letters are in each word.
"Party Pete"            // 9
"Otto Godbless"         // 12
"Evil Dave"             // 8
"Bob the Cat"           // 9
"Charlie the Tramp"     // 15
"Brother Tranquility"   // 18
"Awowogei"              // 8
"Benny"                 // 5

// Step 2 is check for the biggest number.
// Step 2a is check each number and compare to current biggest number.
// Step 2b is store biggest number for later
// Step 3 is verify buggest number is actually the biggest, then log to console

// BIG NUMBER: 19

// let is keywords
// scapeNames is the variable name
// ["string", "string"] is the value (an array with strings in it)
let names = ["Party Pete", "Otto Godbless", "Evil Dave", "Bob the Cat", "Charlie the Tramp", "Brother Tranquility", "Awowogei", "Benny"]
console.log(names)

// This variable can be used in and out of the for of loop
let bigNumber = 0;
let biggestWord;

//   declaration of names
//   for (IteratorDeclaration of ARRAY)
for (const scapeName of names) {
    // scapeName is our iterator variable
    // It represents each individual string inside the names array
    // console.log(scapeName.length);

    console.log(scapeName.length, bigNumber)

    if (scapeName.length > bigNumber) {
        bigNumber = scapeName.length;
        // Assigning the new longest word to our variable
        biggestWord = scapeName;
    } else if (scapeName.length === bigNumber) {
        console.log("Same length");
        // newValue = [oldValue, currentIteration]
        biggestWord = [biggestWord, scapeName].flat();
    }
}

console.log("BIG NUMBER", bigNumber);
console.log("Your biggest name is:", biggestWord)