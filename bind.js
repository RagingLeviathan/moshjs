x = 9;
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};

console.log(module.getX()); // 81

var getX = module.getX;
console.log(getX()); // 9, because in this case, "this" refers to the global object

// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
console.log(boundGetX()); // 81

//another example
var c1 = {
    x: 5,
    y: 10
}

var c2 = {
    x: 13,
    y: 36
}

function getCoords () {
    //console.log(this);
    console.log(this.x + ', ' + this.y);
}

window.x = 65;
window.y = 56;

getCoords();

var c1_funct = getCoords.bind(c1);
var c2_funct = getCoords.bind(c2);

c1_funct();
c2_funct();

//yet another example

var userOne = { 
    firstName: "John",
    lastName: "Smith"
};

var userTwo = {
    firstName: "Joe",
    lastName: "Doe"
}

var fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

var john = fullName.bind(userOne);
var joe = fullName.bind(userTwo);

console.log(john());
console.log(joe());

//testing time....

age = 25;
var bday = {
    age : 13,
    getAge: function() {
        return this.age;
    }
};

console.log(bday.getAge());

var something = bday.getAge;
console.log(something());
//console.log('something is '+something); //shows that something 

var newFunc = something.bind(bday);
console.log(newFunc());