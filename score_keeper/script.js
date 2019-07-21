var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
p1Score = 0;
p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if (gameOver === false){
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("win")
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function(){
    if (gameOver === false){
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add("win")
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener("click", function(){
    resetfunc();
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetfunc();
})

function resetfunc(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("win")
    p2Display.classList.remove("win")
    gameOver = false;
}
