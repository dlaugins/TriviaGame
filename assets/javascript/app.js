

var correctAnswer = 0;
var incorrectAnswer = 0;
var missingAnswer = 0;
var timeLeft = 30;
var gameStarted = false;
var intervalId;

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
    val = $('#Q4:checked').val();
    if (val === "1") correctAnswer++;
    else if (val === "0") incorrectAnswer++;
    else if (val === undefined) missingAnswer++;
    val = $('#Q5:checked').val();
    if (val === "1") correctAnswer++;
    else if (val === "0") incorrectAnswer++;
    else if (val === undefined) missingAnswer++;
    // clean up
    clearInterval(intervalId);
    $("#trivia").hide();
    // write to screen
    $("#correctAnswer").text("Number correct: " + correctAnswer);
    $("#incorrectAnswer").text("Number incorrect: " + incorrectAnswer);
    $("#missingAnswer").text("Number missing: " + missingAnswer);
}

function timeRemaining() {
    timeLeft--
    $("#display").html("Time left: " + timeLeft);
    console.log("Time left: " + timeLeft);
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

    

    $("#submit").on("click", function () {
        game_over();
    });



});






