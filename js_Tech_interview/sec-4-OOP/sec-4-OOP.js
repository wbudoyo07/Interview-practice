

// constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2016 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge = function() {
    console.log(this.name + " is  " + (2016 - this.yearOfBirth) + " Years old");
}

Person.prototype.lastName = "Alex";

// instantion 
var john = new Person('John', 1980, 'teacher');
var will = new Person('Will', 1990, 'student');
var yan = new Person('Yan', 1987, 'rapper');


john.calculateAge();
will.calculateAge();
yan.calculateAge();
console.log("__________________________");
console.log(john);
console.log(will);
console.log(yan);
console.log(Person.prototype);
console.log(" __proto__");
console.log(will.__proto__);

Person.prototype === will.__proto__ ? console.log("true") : console.log("false");



