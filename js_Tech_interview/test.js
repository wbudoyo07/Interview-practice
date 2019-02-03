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
// for(var i = 0; i<10; i++) {
//     console.log(i);
// }


// for(let i =0; i<10; i++) {
//     console.log(i);
//     setTimeout(function(){console.log(i)}, 1000);
//     // setTimeout(console.log(i),1000);
// }

// continue and breka statements
var john = ["John","Smith", 1990, "designer", false,"blue"];

// for(var i = 0; i<john.length; i++) {
//     if(typeof john[i] !== "string") continue;
//     console.log(john[i]);
// }
  
// for(var i = 0; i<john.length; i++) {
//     if(typeof john[i] !== "string") break;
//     console.log(john[i]);
// }
  
// looping backwards
// for(var i = john.length - 1; i >= 0; i--) {
//     console.log(i);
//     console.log(john[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    fullName:"John Smith",
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;
            } else if( bill >= 50 && bill <200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] =  bill + bill * percentage;

        }
    }
}


var mark = {
    fullName:"Mark Miller",
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;
            } else if( bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] =  bill + bill * percentage;

        }
    }
}

function calcAverage (tips) {
    var sum = 0;
    for (var i = 0; i< tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;e
}

// [2, 6, 4 ] -> 0 / 2 / 8 / 12

// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average =  calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average ) {
    console.log(john.fullName + '\'s familys pays higher tips, with average of $' + john.average);
} else if(mark.average > john.average ) {
    console.log(mark.fullName + '\'s familys pays higher tips, with average of $' + mark.average);

}
