
// window.onload = function () {
//     $("#buttons").on("click", stopwatch.start);
// };
var correctAnswer = 0;
var incorrectAnswer = 0;
var missingAnswer = 0;
var timeLeft = 30;
var gameStarted = false;
var intervalId;
// $(".clickMe").click(function () {
//     if (gameStarted = "false") {
//         intervalId = setInterval(stopwatch.count, 1000);
//         game_started = true;
//         time_left = 29;
//     }
// })
function game_over() {
    correctAnswer = 0;
    incorrectAnswer = 0;
    missingAnswer = 0;
    timeLeft = 30;
    // check Q1
    var val = $('#Q1:checked').val();
    if (val === "1") correctAnswer++;
    else if (val === "0") incorrectAnswer++;
    else if (val === undefined) missingAnswer++;
     // check Q2
     val = $('#Q2:checked').val();
     if (val === "1") correctAnswer++;
     else if (val === "0") incorrectAnswer++;
     else if (val === undefined) missingAnswer++;
     val = $('#Q3:checked').val();
     if (val === "1") correctAnswer++;
     else if (val === "0") incorrectAnswer++;
     else if (val === undefined) missingAnswer++;
    // clean up
    clearInterval(intervalId);
    $("#trivia").hide();
    // write to screen
    $("#correctAnswer").text("Number correct: " + correctAnswer);
}

function timeRemaining() {
    timeLeft--
    $("#display").html("time left: " + timeLeft);
    console.log("time left: " + timeLeft);
    if (timeLeft === 0) {
        game_over();

    }
}
$(document).ready(function () {
    $("#trivia").hide();
    $("#start").on("click", function () {
        $("#trivia").show();
        $("#start").hide();
        intervalId = setInterval(timeRemaining, 1000);
    });

    // $("#question").on("click", function () {

    //     var answer = $('input:checked').val(); //value

    //     console.log(answer);

    //     if (answer === 1) {
    //         correctAnswer = + 1;
    //         console.log("correct " + correctAnswe);
    //     } else {
    //         incorrectAnswer = + 1;
    //         console.log("wrong " + incorrectAnswer);
    //     }
    // });

    $("#submit").on("click", function () {
        game_over();
    });



});






