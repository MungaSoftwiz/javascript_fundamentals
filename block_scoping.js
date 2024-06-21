/* best way to organize a set of variables in a block 
with "let" so yu can protect it from an outer scope */
var teacher = "Kyle";

{
    let teacher = "Suzy";
    console.log(teacher);
}
console.log(teacher);

function diff(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    return y - x
}

/* Use "var" for the function level and "let" for a block 
eg in loop blocks (for, if, while*/
function repeat(fn, n){
    var result;

    for (let i = 0; i < n; i++) {
        result = fn( result, i)
    }
    return result;
}

/* We can use an "explicit let block" if we need the expr
for a part of the function */
function formatStr(str) {
    { let prefix, rest;
        prefix = str.slice( 0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if (/^FOO:/.test( str )) {
        return str;
    }
    return str.slice( 4 );
}