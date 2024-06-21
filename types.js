/* In JS variables don't have types but values do */
/* primtive types - undefined, string, number, boolean,
object, bigint, symbol. (they are not objects) */

// objects : functions, array

var v;
console.log(typeof v); //typeof always returns a string
v = "1";
console.log(typeof v); //"string"
v = 2;
console.log(typeof v); //"number"
v = true;
console.log(typeof v); //"boolean"
v = {};
console.log(typeof v); //"object"
v = Symbol()
console.log(typeof v); //"symbol"
v = function(){};
console.log(typeof v); //"function" A subobject
v = null;
console.log(typeof v); //"object" but it's a historical bug
v = 42n;
console.log(typeof v);

console.log(typeof x) //historical bug "should be undeclared"
var greeting = "Hello, class!";
var something = greeting / 2;

//isNan( something );
//isNan( greeting );