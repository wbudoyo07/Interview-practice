// another way to do inheritance is using Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john =  Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

console.log(john);

// another way to use object. create
var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1967},
    job: { value: 'designer'}
});

console.log(jane);
