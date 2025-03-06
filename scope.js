/* Scope determines where variables and functions are accessible in your code.
It’s like a set of rules defining the "visibility" or "reach" of a variable */

// Global scope - vars declared outside any function/block scope are in global
// Can be accessed anywhere in the block of code.

let globalVar = "I'm everywhere!";
console.log(globalVar); // "I'm everywhere!"
function sayHi() {
  console.log(globalVar); // Still accessible here
}
sayHi();


// Function scope - Vars declared inside a function (with var, let, or const)
// are only accessible within that function

function myFunction() {
  let localVar = "I'm trapped here!";
  console.log(localVar); // Works fine
}
myFunction();
console.log(localVar); // ReferenceError: localVar is not defined


/* Block scope - Introduced with let and const in ES6, block scope applies to variables
declared inside a block (e.g., {} in if, for, or while statements).
var ignores block scope (hoisted to the top of function) , but let and const respect it. */

if (true) {
  var x = "I'm free!";
  let y = "I'm contained!";
  console.log(y); // "I'm contained!"
}
console.log(x); // "I'm free!"
console.log(y); // ReferenceError: y is not defined
