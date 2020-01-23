var person = {
    firstName: 'john',
    lastName: 'smith',
    get fullName() {
        return person.firstName + "\n " + person.lastName;
    },
    set fullName(value) {
        var parts = value.split(' ');
        this.firstName = parts [0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Joe Doe';

//getters => access properties
//setters => change (mutate) them

//console.log(`${person.firstName} ${person.lastName}`); es6 version
//console.log("".concat(person.firstName, " ").concat(person.lastName)); //js transpiled version
console.log(person);