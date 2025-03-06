/* Closure is when a function "remembers" the variable outside of it,
(outer scope) even if you pass the function elsewhere(as a val) */

/* They are functions with memory. They bundle up their outer scope and carry it
along(like a backpack), enabling cool tricks like data privacy and state persistence. */

function ask(question) {
  /* inside we use "question" even tho it's no in waitASec.
  waitASec is referencing question so it keeps question alive
  so it has closure ove the question variable */
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

/* The function has access to the outer function's scope, even
 after the outer function has finished executing. */

ask("what is closure");


/* Every function in JavaScript has access to its own scope, its parent’s scope,
and so on up to the global scope. When a function is defined,
it keeps a reference to its surrounding environment (the lexical scope).*/

function outer() {
  let secret = "I'm hidden!";
  function inner() {
    console.log(secret); // Accesses outer's variable
  }
  return inner;
}
const myClosure = outer();
myClosure(); // "I'm hidden!"


/* Closures capture references, not values.
If the outer variable changes, the closure sees the updated value. */

function tricky() {
  let value = 1;
  const func = () => console.log(value);
  value = 2;
  return func;
}
const test = tricky();
test(); // 2, not 1
