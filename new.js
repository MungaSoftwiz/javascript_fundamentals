// USING NEW WITH FUNDAMENTAL OBJECTS

/* Use new with Object(), Array(), Function(),
Date(), RegExp(), Error() - we use new keyword to
instantiate the above(object representation).
Object orientedness of JS */

/* These don't have new infront of them because if we
call them with some value it changes to those(type coersion)
String(), Number(), Boolean() */

/* Useful for constructing Dates */
var yesterday = new Date("May 7, 2024");
utcDate = yesterday.toUTCString();
console.log(utcDate);

/*var myGpa = String(transcipt.gpa);*/
