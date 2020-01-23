var arr = [1,2,3,4];

//functional way
for (var key in arr) {
    if ((key % 2)) {
        arr[key] = 0;
    }
}

console.log("The functional way = " + arr);

var arr = [1,2,3,4]; 

//arrow way
arr = arr.map((value, key) => (key % 2) ? value : 0);

console.log("The arrow way = " + arr);