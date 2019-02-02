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

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in lisbon';
//         case 'designer':
//             return firstName + ' designs beatiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// console.log(foo());


// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }
// console.log(foo());
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }
// console.log(foo());

/***************************** ARRAY */

// var names = [ "John", "Mark", "Jane"];
// var years = new Array(1990,1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// //mutate array data
// names[1] = "Bens";
// names[names.length] = "Mary";
// console.log(names);

// var john = [ "John", "Smith", 1990, "teacher","designer", false];

// john.push("blue");
// john.unshift("Mr.");
// john.unshift("Mr.One");
// john.pop();
// john.pop();
// john.shift();
// console.log(john.indexOf(1990));
// console.log(john);
// // ternary operator
// var isDesigner = john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer";

// console.log(isDesigner);


// var tips = [];
// var paidAmounts = [];

// function tipCalculator (bill) {
//     var percentage;
//     if(bill < 50) {
//         percentage = .2;
//     } else if ( bill >= 50  && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalValues = [ bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]]
// console.log(tips);

// console.log(tipCalculator(10));

// OBJECTS and properties

// object literal
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark","Bob", "Emily"],
//     job: "teacher",
//     isMarried : false
// }

// console.log(john.firstName);
// console.log(john["lastName"]);

// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// // new object syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";

// console.log(jane);


// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1992,
//     family: ["Jane", "Mark","Bob", "Emily"],
//     job: "teacher",
//     isMarried : false,
//     calcAge: function () {
//         this.age= 2018 - this.birthYear;
//     }
// };

// john.calcAge(2000);
// console.log(john);

// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 100,
//     height: 1.95,
//     calcBmi: function() {
//         this.bmi = this.mass/ (this.height * this.height);
//         return this.bmi;
//     }
//  }

//  var mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calcBmi: function() {
//         this.bmi = this.mass/ (this.height * this.height);
//         return this.bmi;
//     }
//  }

// console.log(john, mark);

//  if(john.calcBmi() > mark.calcBmi() ){
//      console.log(john.firstName +" "+john.lastName +" has higher BMI is "+ john.bmi )
//  } 
//  else {
//     console.log(mark.firstName+" "+ mark.lastName +"has higher BMI is " +mark.bmi )

//  }

// Loop and iteration
for(var i = 0; i<10; i++) {
    console.log(i);
}
  
