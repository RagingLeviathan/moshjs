// //factory function
// function createCircle(radius) {
//     return {
//         radius: radius, //ec6 would just be radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// var circle = createCircle(1);

// //constructor function
// function Circle(radius) {
//     //console.log('this is', this);
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// var another = new Circle(1);

// var Circle1 = new Function('radius', `this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);

// var cir = new Circle1(1);
// var cir2 = new Circle1(1);


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() { 
//         console.log('draw');
//     }
// }

// Circle.call({}, 1); //is the same as
// //const.another = new Circle(1);

// Circle.apply({},[1,2,3]);

// var obj = {value:10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// var circle = new Circle(10);

// circle.location = { x: 1};

// var propertyName = 'location';
// circle[propertyName] = { x: 1 };

// delete circle['location'];

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// var circle = new Circle(10);

// //to enumberate all the members in an object
// for (var key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// //to get all the keys in an object
// var keys = Object.keys(circle);
// console.log(keys);

// //to check for the existance of a property or method
// if ('radius' in circle)
//     console.log('Circle has a radius.');

// function Circle(radius){
//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0};

//     this.computeOptomumLocation = function(factor) {
//         //
//     }

//     this.draw = function() {
//         this.computeOptomumLocation(0.1);

//         console.log('draw');
//     };
// }

// var circle = new Circle(10);
// circle.draw();

// function Circle(radius){
//     var color = 'red';

//     this.radius = radius;

//     var defaultLocation = { x: 0, y: 0 };

//     var computeOptomumLocation = function(factor) {
//         //
//     }

//     this.draw = function() {
//         computeOptomumLocation(0.1);

//         console.log('draw');
//     };
// }

// var circle = new Circle(10);
// circle.draw();

// function Circle(radius){
//     this.radius = radius;

//     var defaultLocation = { x: 0, y: 0 };

//     var computeOptomumLocation = function(factor) {
//         //
//     }

//     this.draw = function() {
//         computeOptomumLocation(0.1);

//         //this.radius

//         console.log('draw');
//     };
// }

// var circle = new Circle(10);

// circle.draw();

function Circle(radius){
    this.radius = radius;

    var defaultLocation = { x: 0, y: 0 };

   this.getDefaultLocation = function() {
        return defaultLocation;
   }

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', 
        { 
            get: function() {return defaultLocation;}
        }, 
        {
            set: function(value) { 
                if (!value.x || !value.y) 
                    throw new Error('Invalid location.');
                defaultLocation = value;}
        });
}

var circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();