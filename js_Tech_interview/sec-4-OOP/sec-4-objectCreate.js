// Object.create techniques
/************************************************************* */
var personProto = {
    calculateAge: function() {
        console.log( 2016 - this.yearOfBirth);
    }
}

var john =  Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

var jane = Object.create( personProto, {
    name : { value : "Jane"},
    yearOfBirth : { value: 1969 },
    job: { value: "Designer"}
})
/************************************************************* */

// primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: "John",
    age: 26
};

// Objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city =  "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);

/**************************************************************************************/
// PASSING FUNCTIONS AS ARGUMENTS
var years = [ 1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(el) {
    return el >=18;
}
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 -(0.67 * el));
    } else {
        return -1;
    }
}
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);