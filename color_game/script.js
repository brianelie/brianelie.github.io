//Define variables
var numSquares = 6;
var pickedColor;
var colors = [];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");        
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    //Add event listener on click of each square, depending on if it is correct or not
    for(var i = 0; i < squares.length; i++){
        //Add click listeners to square
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    resetButton.textContent = "New Colors";
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //Change colors of squares on the page
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    //Change Heading color back to black
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";    
}

//Reset colors
resetButton.addEventListener("click", function(){
    reset();
})

// Change all squares to the same color. Input is that color
function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//Select which square is the correct one
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

//Creates an array of randomly generated colors. Input is number of colors desired
function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

//Randomly generates a color is rgb format: rgb(r, g, b)
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}