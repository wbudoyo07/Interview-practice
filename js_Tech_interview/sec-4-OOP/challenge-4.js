/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct =  correct;
    }
    
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
    
        for(var i = 0;  i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer) {
            if( answer === this.correct) {
                console.log('Correct answer!');
            } else {
                console.log('You are wrong');
            }
    }
    
    
    var q1  = new Question('Is Javascript the coolest programming language in the world ? ', 
    ['Yes', 'No'], 0);
    
    var q2 = new Question('What is the name of this course\'s teacher?',
                ['John', 'Michael', 'Jonas'],2);
    
    var q3 = new Question('What does best describe coding?',  
                [ 'Boring','Hard','Fun','Teduious'],2);
    
    var questions = [q1,q2,q3];
    
    var n = Math.floor( Math.random() * questions.length);
    console.log(n);
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt ('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
    
})();

function Question() {
    alert("test");
}
Question();

*/

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct =  correct;
    }
    
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
    
        for(var i = 0;  i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callBack) {
            var sc;

            if( answer === this.correct) {
                console.log('Correct answer!');
                sc = callBack(true);
            } else {
                console.log('You are wrong');
                sc = callBack(false);
            }

            this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log(("======================"));
    }

    var q1  = new Question('Is Javascript the coolest programming language in the world ? ', 
    ['Yes', 'No'], 1);
    
    var q2 = new Question('What is the name of this course\'s teacher?',
                ['John', 'Michael', 'Jonas'],2);
    
    var q3 = new Question('What does best describe coding?',  
                [ 'Boring','Hard','Fun','Teduious'],2);

    var questions = [q1,q2,q3];


    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        
        var n = Math.floor( Math.random() * questions.length);
        questions[n].displayQuestion();
        
        var answer = prompt ('Please select the correct answer.');
    
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

    }
    
    nextQuestion();
    
})();
