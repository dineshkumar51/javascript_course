/*
 * Strict Mode - restricts some things that helps to reduce bugs 
 */

//'use strict';

let hasDriversLicense = false;
const hasPassed = true;

if (hasPassed) hasDriverLicense = true; // hasDriverLicense - type error missing s

if (hasDriversLicense) console.log('congrats! you got the license');

// in normal mode javascript won't cause any error since it will create new variable with the name hasDriverLicense


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


