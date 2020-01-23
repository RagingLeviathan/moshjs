function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

var circle = new Circle(1); //receiving the new object created above 