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




/*
 *  Arrow Function
 */

const calAgeArrow = birthYear => 2025 - birthYear;

const addtwoNum = (a, b) => a + b;

const ageUntilRetirement = birthYear => {
    const age = 2025 - birthYear;
    const ageUntilRetirement = 65 - age;
    return ageUntilRetirement;
}

console.log(calAgeArrow(1998));
console.log(addtwoNum(2, 3));
console.log(ageUntilRetirement(1990));


/*
 * Arrays
 */

const array = ["Dinesh", "kumar", 34.56];
array[3] = array;
array[10] = "nandhini";


console.log(array);
