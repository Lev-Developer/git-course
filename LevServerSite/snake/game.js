
/*
    =====================
    General notes for Lev
    =====================

    - Be VERY descriptive in the names of your variables!
    E.g. food => foodCoords (= "Food coordinates")
    E.g. box => boxSidePxls (= "Box side's (length in) pixels")
    E.g. dir => snakeDir

    - Define all of your numerical constants and parameters in one place near the beginning of your code

    - Always try to follow the 'DRY principle'
    DRY = "Don't Repeat Yourself"
    I.e. put repeated code into a function, and use that function in multiple places

    - Variable-declaration syntax in javascript:
    Always use `const` if the value will not change!
    Always use `let` if the value will change!

    - NEVER hard-code repeated numbers; always define a named parameter!
    E.g. `Math.floor((Math.random() * 17 + 1)) * boxSidePxls` =>
    const arenaWidthBoxes = 17;
    const arenaX0Boxes = 1;
    ...
    Math.floor((Math.random() * arenaWidthBoxes + arenaX0Boxes)) * boxSidePxls

    - Naming conventions:
    Always name booleans with `is` at the beginning!
*/




/**
 * Connect our javascript to the html canvas
 */
const canvas = document.getElementById("game-canvas-id"); // Create a handle on the canvas element in our html code so that we can draw on that canvas using javascript
const ctx = canvas.getContext("2d");            // Create a "context" object connected to our canvas. This is how we draw on the canvas in js

/**
 * Load images
 */

// Define a function to be called when a game image has finished loading
function imageLoaded() {
    // Note: the word `this` is a special word in JS; it refers to the object calling this function as a method
    // In this case, `this` refers to the image, so we can print its src property here
    console.log("The " + this.src + " image has now loaded!");
    tryStartingGame();
}

// Load ground image
const groundImg = new Image();              // Create an empty "image object" called "ground"
groundImg.src = "images/ground.jpg";        // Start loading an image into the image object
groundImg.onload = imageLoaded;             // Set the image's onload callback method

// Load food image
const foodImg = new Image();
foodImg.src = "images/food.png";
foodImg.onload = imageLoaded;


/**
 * Define our game CONSTANTS with `const`
 */
const arenaWidthBoxes = 17;
const arenaHeightBoxes = 15;
const arenaX0Boxes = 1;
const arenaY0Boxes = 3;
const boxSidePxls = 32;
// Note: in JS, the snake array is CONSTANT even though its contents can vary!
const snake = [
    {
        x: 9 * boxSidePxls,
        y: 10 * boxSidePxls
    }
];


/**
 * Define our game VARIABLES with `let`:
 */
let game;
let snakeDir;
let score = 0;
let foodCoords = generateFoodCoords();
let gameFrameRateHz = 10;

/**
 * Listen for changes to the html slider and change the game's speed
 * whenever the slider is changed
 */
const speedSlider = document.getElementById('speed-slider-id');
speedSlider.onchange = function () {
    gameFrameRateHz = 25 - speedSlider.value;
    // Restart game clock to put new speed into effect
    stopGame();
    tryStartingGame();
};


/**
 * Define our game's helper functions
 */

//
function generateFoodCoords() {
    return {
        x: Math.floor((Math.random() * arenaWidthBoxes + arenaX0Boxes)) * boxSidePxls,
        y: Math.floor((Math.random() * arenaHeightBoxes + arenaY0Boxes)) * boxSidePxls,
    };
}

// Start listening for key events and update snakeDir accordingly
const keyDownListener = document.addEventListener("keydown", function direction(event) {


    const code = event.keyCode;
    const keys = { left: 37, up: 38, right: 39, down: 40 };

    if (Object.values(keys).includes(code)) {
        event.preventDefault();
        if (!snakeDir) setGameMessage('Yum yum carrots!');
        if (code === keys.left && snakeDir !== 'right') snakeDir = "left";
        if (code === keys.up && snakeDir !== 'down') snakeDir = "up";
        if (code === keys.right && snakeDir !== 'left') snakeDir = "right";
        if (code === keys.down && snakeDir !== 'up') snakeDir = "down";

    }
});

// Only start the game after our images have loaded
function tryStartingGame() {
    if (foodImg.complete && groundImg.complete && !game) {
        game = setInterval(drawGame, gameFrameRateHz * 10);
        setGameMessage('Press an arrow key to start moving!');
    }
}

// Check if snake head collides with body (=non-head element of snake arr)
function snakeStrikesSelf() {
    if (snake.length <= 1) return;
    const head = snake[0];
    const body = snake.slice(1);
    for (let i = 0; i < body.length; i++) {
        if (head.x == body[i].x && head.y == body[i].y) {
            stopGame('Oh no! Snake ate itself!', 'red');
        }
    }
}

//
function stopGame(reasonForStopping = "unknown") {

    // Stop drawing game
    clearInterval(game);
    game = null;
    setGameMessage(reasonForStopping, 'red');

    // Clean up resources
    document.removeEventListener('keydown', keyDownListener);

}

function setGameMessage(message = "", color = "green") {
    // Update the html message
    const messageHeader = document.getElementById('game-message-id');
    messageHeader.innerHTML = message;
    messageHeader.style.color = color;

}

// Call this function when you are ready to draw to the canvas. Make sure your images have loaded first!!!
function drawGame() {

    // Draw images
    ctx.drawImage(groundImg, 0, 0);
    ctx.drawImage(foodImg, foodCoords.x, foodCoords.y);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "yellow" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, boxSidePxls, boxSidePxls);
    }

    // Update score
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, boxSidePxls * 2.5, boxSidePxls * 1.7);

    // Snake-head coords
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Add to score if head collides with food
    if (snakeX == foodCoords.x && snakeY == foodCoords.y) {
        score += 1;
        foodCoords = generateFoodCoords();
    } else {
        // Else, remove end of snake
        snake.pop();
    }

    // Stop game if snake goes outside the boundaries
    const isSnakeWest = snakeX < boxSidePxls;
    const isSnakeEast = boxSidePxls * 17 < snakeX;
    const isSnakeNorth = snakeY < 3 * boxSidePxls;
    const isSnakeSouth = snakeY > boxSidePxls * 17;
    if (isSnakeWest || isSnakeEast || isSnakeNorth || isSnakeSouth) {
        stopGame('Oh no! Snake ran into the wall and died!');
    }

    // Update position of snake's head
    if (snakeDir == "left") snakeX -= boxSidePxls;
    if (snakeDir == "right") snakeX += boxSidePxls;
    if (snakeDir == "up") snakeY -= boxSidePxls;
    if (snakeDir == "down") snakeY += boxSidePxls;

    // Create new coord at new-head position
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Add that new coord to snake array
    snake.unshift(newHead);

    // Check if snake head collides with body
    snakeStrikesSelf();

}



