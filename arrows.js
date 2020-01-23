var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
  
  var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  // This statement returns the array: [8, 6, 7, 9]
  elements.map(function(element) {
    return element.length;
  });
  
  // The regular function above can be written as the arrow function below
  elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When there is only one parameter, we can remove the surrounding parentheses
  elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  elements.map(element => element.length); // [8, 6, 7, 9]
  
  // In this case, because we only need the length property, we can use destructuring parameter:
  // Notice that the `length` corresponds to the property we want to get whereas the
  // obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
  // to any valid variable name you want
  elements.map(({ length :lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]
  
  // This destructuring parameter assignment can also be written as seen below. However, note that in
  // this example we are not assigning `length` value to the made up property. Instead, the literal name
  // itself of the variable `length` is used as the property we want to retrieve from the object.
  elements.map(({ length }) => length); // [8, 6, 7, 9]
  
  function Person() {
    var that = this;
    that.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `that` variable of which
      // the value is the expected object.
      that.age++;
      //console.log(that.age);
    }, 1000);
  }

  var pers = new Person();
  console.log(pers);

  /*In ECMAScript 3/5, the this issue was fixable by assigning the value in this to a variable that could be closed over.*/

function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}

/*Alternatively, a bound function could be created so that a preassigned this value would be passed to the bound target function (the growUp() function in the example above).

An arrow function does not have its own this. The this value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules. So while searching for this which is not present in current scope, an arrow function ends up finding the this from its enclosing scope.

Thus, in the following code, the this within the function that is passed to setInterval has the same value as the this in the lexically enclosing function:*/

function Person(){
  this.age = 0;

  console.log(this.age);

  setInterval(() => {
    this.age++; // |this| properly refers to the Person object
   // console.log("inside  funct = " + this.age);
  }, 1000);
}

var p = new Person();

/*Invoked through call or apply
Since arrow functions do not have their own this, the methods call() and apply() can only pass in parameters. Any this argument is ignored.*/

var adder = {
    base: 1,
  
    add: function(a) {
      var f = v => v + this.base;
      return f(a);
    },
  
    addThruCall: function(a) {
      var f = v => v + this.base;
      var b = {
        base: 2
      };
  
      return f.call(b, a);
    }
  };
  
  console.log(adder.add(1));         // This would log 2
  console.log(adder.addThruCall(1)); // This would log 2 still
  

  //  Arrow functions do not have their own arguments object. Thus, in this example, arguments is simply a reference to the arguments of the enclosing scope:

var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 6

/*Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods: */

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
  obj.b(); // prints undefined, Window {...} (or the global object)
  obj.c(); // prints 10, Object {...}

  //Arrow functions do not have their own this. Another example involving Object.defineProperty():

  var obj = {
    a: 10
  };
  
  Object.defineProperty(obj, 'b', {
    get: () => {
      console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
      return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
    }
  });

/*Use of the new operator

Arrow functions cannot be used as constructors and will throw an error when used with new.*/

var Foo = () => {};
//var foo = new Foo(); // TypeError: Foo is not a constructor

/*Use of prototype propertySection
Arrow functions do not have a prototype property.*/

var Foo = () => {};
console.log(Foo.prototype); // undefined

/*Function body
Arrow functions can have either a "concise body" or the usual "block body".

In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.*/

var func = x => x * x;                  
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; }; 
// with block body, explicit "return" needed

/*Returning object literals
Keep in mind that returning object literals using the concise body syntax params => {object:literal} will not work as expected.*/

var func = () => { foo: 1 };
// Calling func() returns undefined!

//var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name

/*This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. foo is treated like a label, not a key in an object literal).

You must wrap the object literal in parentheses:*/

var func = () => ({ foo: 1 });

/*Parsing order
Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently with operator precedence compared to regular functions.*/

let callback;

callback = callback || function() {}; // ok

//callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok

//More examples
// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')(); 
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0); 
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains 
/*
promise.then(a => {
  // ...
}).then(b => {
  // ...
});*/

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);