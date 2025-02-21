let js = 'amazing';

if (js === 'amazing') alert('Javascript is FUN!');

console.log(10 + 20 - 40);

let country = 'India';
let continent = 'Asia';
let population = 1438100000;
console.log(country);
console.log(continent);
console.log(population);

console.log("");
console.log("DataTypes");

let variable;


/*
 Datatypes in java script
 JavaScript is Dynamically typed
*/

console.log(variable);
console.log(typeof variable);

variable = 23;

console.log(typeof variable);

variable = 23.45;

console.log(typeof variable);

variable = 'Hello';

console.log(typeof variable);

variable = true;

console.log(typeof variable);

variable = null;

console.log(typeof variable);



/*
    Different ways of declaring variables
    let vs var vs const

    always use const if we are not going change the variable's value
    Can't reassign a const variable and const can't be undefined
    In later section we wil see the diff between these three in detail
 */

let firstName = 'Dinesh';

var secondName = 'Kumar';

const dateOfBirth = '15/12/2000';

// dateOfBirth = '5/1/2000';

// const rollNo;




/*
Operators

Operator_precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/

console.log(2 + 4);

console.log(2 - 4);

console.log(234 / 10);

console.log(2 * 4);

console.log(2 ** 4);//Power

let x = 2;
x += 2;
x *= 2;
x++;

console.log(x);

const currYear = 2025;
const myAge = currYear - 2000;

console.log(firstName + ' ' + secondName);

console.log(myAge >= 18);



/*
    Strings and Template Literals
*/

console.log("I'am " + firstName + ' ' + secondName + ' and my age is ' + (currYear - 2000));
console.log(`I'am ${firstName} ${secondName} and my age is ${currYear - 2000}`);


/*
  Type Conversion - when converted thru code
 */

let yearStr = '1991';
let year = Number(yearStr);
console.log(year + 18);

yearStr = String(year);

console.log(Number("hello"));


/*
  Type Corecion - when converted by javascript itself
 */

console.log("My age is " + 23); // java script internaly converts 23 into string

console.log('2' - 10);

console.log('2' * '3');


/* 
    Type Conversion and Type Corecion in boolean
*/

// 5 flasy values 0, '', undefined, null and NaN


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));


const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("get a job!");
}

let testVariable;

if (testVariable) {
    console.log("The variable is defined");
} else {
    console.log("The variable is undefined or null");
}







