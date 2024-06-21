var numStudents = 16;

console.log(
    /* coerces to a string. +"" is not needed */
    `There are ${numStudents+""} students`
);

/* Number + Number = Number, Number + String = String,
String + Number = String, String + String = String 
This "+" is overloaded with behaviour for the things above*/

function addStudent(numStudents) {
    return numStudents + 1;
}

/*addStudent(
    Number(studentInputElem.value)
);*/