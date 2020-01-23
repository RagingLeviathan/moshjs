function createCircle(radius) {
    return {
        //radius: this.createCircle,
        radius, //shortened from radius:radius bc key and value are the same
            draw() {
                console.log('draw');
            }
        };
}

var circle1 = createCircle(1);
console.log(circle1);

var circle2 = createCircle(2);
console.log(circle2);