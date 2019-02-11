// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function game() {
//     var score = Math.random() * 10;
//     console.log(score);
//     console.log(score>=5);
// }
// game();

// this is IIFE
(function(){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score>=5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score>=5 - goodLuck);
})(5);