let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).on("keypress", function() {
    if(!started) {
        nextSequence();
    }
});

function playSound(colour) {
    let audio = new Audio("./sounds/" + colour + ".mp3");
    audio.play();
}

async function nextSequence () {
    randomNumber = Math.round(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    console.log(gamePattern);
    await sleep (1000);
    flashButton(randomChosenColour);
}

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function flashButton(colour) {
    $("#" + colour).addClass("pressed");
    setTimeout(() => {
        $("#" + colour).removeClass("pressed");
    }, 100);
    $("#" + colour).fadeOut(50).fadeIn(50);
    playSound(colour);
}

$(".btn").click(function() {
    userChosenColour = $(this).attr("id");
    flashButton(userChosenColour)
    userClickedPattern.push(userChosenColour);
    for(let i = 0; i < userClickedPattern.length; i++) {
        if(userClickedPattern[i] !== gamePattern[i]) {
            gameOver();
            return;
        }
    }
    if(userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        nextSequence();
    }
});

function gameOver() {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
    playSound("wrong");
    started = false;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}






