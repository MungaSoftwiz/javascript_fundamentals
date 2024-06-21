/* == allows coercion (types different)
   === disallows coersion (types same)*/
   
var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

/* If both 1 & 2 are equal then both equals are identical */
console.log(studentName1 == studentName2);
console.log(studentName1 === studentName2);

console.log(workshopEnrollment1 == workshopEnrollment2);
console.log(workshopEnrollment1 === workshopEnrollment2);

/* when types are different */
var workshop1 = { topic: null };
var workshop2 = {};

if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined)
) {
    // ...
}

/* Better because it's more readable, whenwver you can use ==
It makes reader focus on the main thing not of syntax*/
if (
    workshop1.topic == null && workshop2.topic == null) {}

// coercive equality: null == undefined

// CONCEPT ON EMPTINESS
/* undefined - have variable but not given a value
undeclared - never been created in any scope we have access
uninitialized - certain variables such as block scope vars
don't get initialized. Don't get undefined state
*/