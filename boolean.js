/* This will be false when converted to a boolean
0, -0, null, NaN, false, undefined */

while (newStudents.length) {
    enrollStudent(newStudents.pop());
}

/* !! converts the string into a boolean i.e calls Boolean()
Below are methods of converting explicitly */
if (!!studentInputElem.value) {
    numStudents = Number(studentsInputElem.value);
}

while (newStudents.length > 0) {}