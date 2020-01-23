//how to clone an object... but it's an old approach

var circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// var another = {};
// for (var key in circle)
//     another[key] = circle[key];

//the above can be condensed into this ;
// var another1 = Object.assign({
//     color: 'yellow'
// }, circle);

//object.assign copies the properties and methods from one or  more source objects into a target object, and we can then use that to clone an object, or combine multiple objects into a single object
var another = Object.assign({}, circle);

 //the spread operator is used to spread an object (getting all the object's properties and methods and putting them into another object)
var another = { ...circle };
console.log(another);
//console.log(another1);