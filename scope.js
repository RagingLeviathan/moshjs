//example of scoping
var color = 'red';  //bad practice to have global variables

function start() {
    var message = 'hi';
    var color = 'blue'; //local variables in a function take precedence over globals
    console.log(color);
}

function stop() {
    var message = 'bye';
}

start();