var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    /*no topic declared in class or var scope
    so ends up creating a var in the global scope*/
    topic = "React"; 
    console.log(`Welcome! ${teacher}`);
}

otherClass();
console.log(`Learning ${topic}`);

//Function Expressions (fnc assigned as a value)
var clickHandler = function(){}; //anonymous function expression
var keyHandler = function keyHandler(){}; //named fnc expression

//Arrow function expressions
/* anonymous arrow function expression, like OCaml */
let people = ['Bonny', 'Iman', 'Lynn', 'J'];
var ids = people.map((person, index) => index);
console.log(ids);

/* named function expression */
/*var ids = people.map(function getId(person) {
    return person.id;
})*/

// IIFEs (Immediately invoked function expressions)
var teacher1 = "Phil";

/* with an IIFE you encapsulate behaviour in a block */
( function anotherTeacher() {
    var teacher1 = "Diana"; //not overriding on line 30 - private variable
    console.log(teacher1);
} ) (); /* () execution part */

console.log(teacher1); // Outputs: Phil
