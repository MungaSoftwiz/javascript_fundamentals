/* A function's "this" keyword references the execution
context for when the function was called (det entirely by how
    function was called
)
Has dynamic context: we can use same function but change the 
context in where and how we use the function */
var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question); //this aware fnc
    },
};
// Implicit binding rule "worshop.ask" (there are 4 rules)
workshop.ask("What is implicit binding?")


function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: "Suzy"
    };
    // calls myContext object as the "this" keyword
    // Explicit binding(rem there are 4 rules)
    ask.call(myContext, "why?");
}
otherClass();