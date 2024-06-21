/* NaN("not a number") - this special value indicates an
invalid number*/

var myAge = Number("0o46");
var myNextAge = Number("39");
var myCatsAge = Number("n/a");
myAge - "my son's age"; /* "-" expects a value in JS so it
converts "my son's age" to a number -> NaN  */

// false OOPS!. (NaN != NaN). Only value not equal to itself
console.log(myCatsAge === myCatsAge);

console.log(isNaN(myAge)); //false
console.log(isNaN(myCatsAge)); //true
// true OOPS!. IsNaN coerces values to number before it checks
console.log(isNaN("my son's age"));

console.log(Number.isNaN(myCatsAge)); //true
// Number.isNaN -> ES6 feature that doesn't do any coersion
// so tells whether number or not. Since a string so "false"
console.log(Number.isNaN("my son's age")); //false

console.log(typeof(NaN)); // number (invalid number)