/*This shows under the hood what the class keyword is doing 
Prototypal class pattern */

/* A class workshop that can be instantiated multiple times
 Function acts as a constructor for the Workshop class.
 Notice that it is "this aware" */

function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

/* "new" keyword invokes Workshop function and objects that
gets created is linked to the Workshop.prototype.
As you can see deepJS itself does not have an ask methos*/
var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?")
reactJS.ask("Isn't 'prototype' ugly?");


/* Class keyword is layered on top of the prototype system */
class newWorkshop{
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

var deepJS = new newWorkshop("Phil");
var reactJS = new newWorkshop("Lily");

deepJS.ask("Is 'prototype' a class?")
reactJS.ask("Isn't 'prototype' ugly?");
