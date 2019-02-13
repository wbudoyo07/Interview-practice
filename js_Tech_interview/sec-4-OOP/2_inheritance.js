
// Constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

// inheritance 
Person.prototype.calculateAge = function () {
      console.log(2016 - this.yearOfBirth);
}

// we can inheritance a properties as well
Person.prototype.lastName = 'Smith';

// Instantiation 
var will = new Person('Will', 1980, 'Student');
var jane = new Person('Jane', 1991, 'Designer');
var mark = new Person('Mark',1978, 'retired');



console.log(will);
will.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(will.name +" "+ will.lastName);
console.log(jane.lastName);
console.log(mark.lastName);



