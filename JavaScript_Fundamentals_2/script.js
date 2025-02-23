/*
 * Strict Mode - restricts some things that helps to reduce bugs 
 */

//'use strict';

let hasDriversLicense = false;
const hasPassed = true;

if (hasPassed) hasDriverLicense = true; // hasDriverLicense - type error missing s

if (hasDriversLicense) console.log('congrats! you got the license');

// In normal mode javascript won't cause any error since it will create new variable with the name hasDriverLicense


/*
 *  Functions
 */

function logger() {
    console.log("Iam the logger function");
}

logger();
console.log(logger());
logger(23);

function makeJuice(oranges, apples) {
    const juice = `Juice made out of ${oranges} oranges and ${apples} apples`;
    return juice;
}

console.log(makeJuice(2, 3));
console.log(makeJuice(3));
console.log(makeJuice(2, 3, 4));

//In java script you won't get any errors for arguments or return types.


/*
Function Declaration Vs Function Expression
*/

//Function Declaration - it can be called before its declaration

console.log(findAge(1999));

function findAge(birthYear) {
    return 2025 - birthYear;
}


//Function Expression - Assign a anonimous function to a variable
// Variable can be assigned with a function expression

const findAgeFuture = function (birthYear) {
    return 2040 - birthYear;
}

console.log(findAgeFuture(1999));







