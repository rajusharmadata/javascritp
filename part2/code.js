// Practice Questions
// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let number = 78;
if (number / 10) {
  console.log("good");
} else {
  console.log("bad");
}

/*

Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert(by substituting  their name & age) : name is age years old.

let name = prompt("Enter your name ");
let age = prompt("Enter  your age ");
alert(`${name} is ${age} years old`);

*/

/*

Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
 Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December


let Quarter = prompt("Enter a Quarter ");
// Quarter = 1;
switch (Quarter) {
    case '1':
        console.log("January, February, March");

        break;
    case '2':
        console.log("April , May , June");
        break;
    case '3':
        console.log("July ,August ,September");
        break;

    case '4':
        console.log("October,November,December");
        break;
    default: console.log("Wrong Quarter");
        break;
}
 /**
  * Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not.
  */
/*
let str = prompt("Enter string ");
if (str[0] == 'a' || 'A' && str.length > 5) {
    console.log("golden Word ");
} else {
    console.log("note golden Word");
}
    */

// Qs5. Write a program to find the largest of 3 numbers.

let a = 5;
let b = 6;
let c = 7;
if (a > b && a > c) {
    console.log("a is greater then b && c");
} else if (b > c) {
    console.log("b is greater than a and c ");

} else {
    console.log("c is greater then a and b");
}


