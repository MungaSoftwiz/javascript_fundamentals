/* Hoisting is JavaScript’s quirky behaviour where variable and function declarations
are "lifted" to the top of their scope before the code runs. It’s not literal movement
in the code — it’s how the JavaScript engine processes things during compilation. */

// Function declaration - fully hoisted including body, so you can call function before defn

sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}


// Var declaration - only the declaration (e.g., var x) is hoisted, not the initialization (e.g., x = 5).
// This leads to undefined if you access it early.

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// What's happening
var a; // Hoisted
console.log(a); // undefined
a = 10; // Assignment stays in place


/* let and const: These are hoisted too, but they’re not initialized until their line of code runs.
This creates a "temporal dead zone" (TDZ) where accessing them early throws an error. */

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
