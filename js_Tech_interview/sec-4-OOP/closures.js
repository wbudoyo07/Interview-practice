// Closures
/*
function retirement( retirementAge ) {
    var a = " years left until retirement.";

    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a ); 
    }
}

var retirementUS = retirement(66);

retirementUS(1990);

retirement(66)(1990);

*/
function interviewQuestion(job) {
    var teacherText = "What subject do you teach,";
    var designerText = ", can you please explain what UX design is ?";
    var defaultText = ", what do you do ?";

    return function(name) {
        if (job === "teacher") {
            console.log(teacherText + name);
        } else if ( job === "designer") {
            console.log(name + designerText);
        } else {
            console.log(name + defaultText);
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var defaultQuestion = interviewQuestion();

teacherQuestion("William");
designerQuestion("Yessy");
defaultQuestion("Rico");

function interviewQuestion(job , name) {
    
}
