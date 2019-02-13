// Creating an  Object
var john = {
    name: 'JohnOne',
    yearOfBirth: 1980,
    job: 'teacher'
}


// Constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
}

// Instantiation 
var john =  new Person('John', 1990, 'teacher');
var will = new Person('will', 1980, 'student');
var jane = new Person('Jane', 1991, 'Designer');
var mark = new Person('Mark',1978, 'retired');



console.log(will);

will.calculateAge();

