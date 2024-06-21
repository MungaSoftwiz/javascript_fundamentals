/* Closere is when a function "remembers" the variable outside of it,
(outer scope) even if you pass the function elsewhere(as a val) */
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
