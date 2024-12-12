// Practice Questions
// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let number = 78;
if (number / 10) {
    console.log("good");
} else {
    console.log("bad");
}


// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
//     their name & age) :
//     name is age years old.

let name = prompt("Enter your name ");
let age = prompt("Enter  your age ");
alert(`${name} is ${age} years old`);
