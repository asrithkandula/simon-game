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