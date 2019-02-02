// function calculateAge(birthYear) {
//     return 2018 -  birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1990);
// var ageJane = calculateAge(1990);

// console.log(ageJohn, ageMike,ageJane);

// function yearUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if( retirement > 0 ) {
//         console.log(firstName + ' retires in ' + retirement + ' years. ');

//     } else {
//         console.log(firstName + ' is already retired ');

//     }
// }

// yearUntilRetirement(1990,'John');
// yearUntilRetirement(1940,'Mike');
// yearUntilRetirement(1998,'Johnny');
// function doSomething(name) {
//      'Hello ' + name;

// }
 
// console.log(doSomething('Jared'));

// function declaration
// function whatDoYouDo( job, firstName) {}

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in lisbon';
        case 'designer':
            return firstName + ' designs beatiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));