var selectedColours = ['red','blue'];
selectedColours[2] = 1;
console.log(selectedColours.length);

var numbers = [1, -1, 2, 3];

var filtered = numbers.filter(n => n >= 0);

console.log(filtered);

//array map time

//mapping to string
var items = filtered.map(n => '<li>' + n + '</li>');

var html = '<ul>' + items.join('') + '</ul>';

console.log(html);

//more...

var filters = numbers.filter(n => n >= 0);

var moreItems = filters.map(n => {
    var obj = { value: n };
    return obj;
}
);


