//using var
function start() {
    for (var i = 0; i < 5; i++)
        console.log(i);

    //another example of var's function-wide scope
    /*
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red;
        }
    }

    */


    //won't throw error because scope of var is not limited to for block
    console.log("var's thing is " + i);
}

//using let 
function start2() {
    for (let i = 0; i < 5; i++)
        console.log(i);
        
    /*    for (let i = 0; i < 5; i++) {
        if (true) {
            let color = 'red;
        }
    }
    */
    
    //will throw error bc outside of for code block
    console.log("let's thing is " + i);
}

//var creates function-scoped variables
//ES6 (ES2015) w/ let, const creates block-scoped variables 
// start();
// start2();

//another example
var color = 'red';
let age = 30;
//these get attatched to globe scope / Window object