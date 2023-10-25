var str="";
var count=0;
document.addEventListener("keydown",function(){
    if(str.length===0){
        var n=Math.floor(Math.random()*4)+1;
        switch(n){
            case 1:
                var sound=new Audio("sounds/green.mp3");
                sound.play();
                buttonAnimation("green");
                str+="g";
                break;
            case 2:
                var sound=new Audio("sounds/red.mp3");
                sound.play();
                buttonAnimation("red");
                str+="r";
                break;
            case 3:
                var sound=new Audio("sounds/yellow.mp3");
                sound.play();
                buttonAnimation("yellow");
                str+="y";
                break;
            case 4:
                var sound=new Audio("sounds/blue.mp3");
                sound.play();
                buttonAnimation("blue");
                str+="b";
                break;
        }
        document.querySelector("h1").textContent="Level 1";
    }
    else{
        document.querySelector("h1").textContent="Game Over! Press any key to Restart.";
        var sound=new Audio("sounds/wrong.mp3");
        sound.play();
        gameEndAnimation();
        count=0;
        str="";
    }
});


for(var i=0;i<4;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var eligibility=(this.classList[1].slice(0,1)===str.slice(count,count+1));
        if(eligibility && str.length===count+1){
            var n=Math.floor(Math.random()*4)+1;
            switch(n){
                case 1:
                    var sound=new Audio("sounds/green.mp3");
                    sound.play();
                    buttonAnimation("green");
                    str+="g";
                    break;
                case 2:
                    var sound=new Audio("sounds/red.mp3");
                    sound.play();
                    buttonAnimation("red");
                    str+="r";
                    break;
                case 3:
                    var sound=new Audio("sounds/yellow.mp3");
                    sound.play();
                    buttonAnimation("yellow");
                    str+="y";
                    break;
                case 4:
                    var sound=new Audio("sounds/blue.mp3");
                    sound.play();
                    buttonAnimation("blue");
                    str+="b";
                    break;
            }
            document.querySelector("h1").textContent="Level "+str.length;
            count=0;
        }
        else if(eligibility && str.length!==0){
            count++;
            var firstLetter=this.classList[1].slice(0,1);
            switch(firstLetter){
                case "g":
                    var sound=new Audio("sounds/green.mp3");
                    sound.play();
                    buttonAnimation("green");
                    break;
                case "r":
                    var sound=new Audio("sounds/red.mp3");
                    sound.play();
                    buttonAnimation("red");
                    break;
                case "y":
                    var sound=new Audio("sounds/yellow.mp3");
                    sound.play();
                    buttonAnimation("yellow");
                    break;
                case "b":
                    var sound=new Audio("sounds/blue.mp3");
                    sound.play();
                    buttonAnimation("blue");
                    break;
            }
        }
        else{
            document.querySelector("h1").textContent="Game Over! Press any key to Restart.";
            var sound=new Audio("sounds/wrong.mp3");
            sound.play();
            gameEndAnimation();
            count=0;
            str="";
        }
    });
}

function buttonAnimation(className){
    document.querySelector("."+className).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+className).classList.remove("pressed");
    },100);
}

function gameEndAnimation(){
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    },100);
}



// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
