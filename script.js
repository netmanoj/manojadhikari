var playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
// Get the canvas element
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 500;
canvas.height = 500;

// Initialize the snake
var snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
];

// Initialize the direction
var direction = "right";

// Initialize the food
var food = { x: 300, y: 300 };

// Draw the snake on the canvas
function drawSnake() {
  snake.forEach(drawSnakePart);
}

// Draw a part of the snake on the canvas
function drawSnakePart(snakePart) {
  ctx.fillStyle = "#fff";
  ctx.strokestyle = "#000";
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Draw the food on the canvas
function drawFood() {
  ctx.fillStyle = "#f00";
  ctx.strokestyle = "#000";
  ctx.fillRect(food.x, food.y, 10, 10);
  ctx.strokeRect(food.x, food.y, 10, 10);
}

// Move the snake in the specified direction
function moveSnake() {
  var x = snake[0].x;
  var y = snake[0].y;

  switch (direction) {
    case "right":
      x += 10;
      break;
    case "left":
      x -= 10;
      break;
    case "up":
      y -= 10;
      break;
    case "down":
      y += 10;
      break;
  }

  // Check if the snake has collided with the food
  if (x === food.x && y === food.y) {
    // Grow the snake
    var tail = { x: x, y: y };
    snake.unshift(tail);

    // Generate new food
    food = {
      x: Math.floor(Math.random() * canvas.width / 10) * 10,
      y: Math.floor(Math.random() * canvas.height / 10) * 10
    };
  } else {
    // Remove the last part of the snake
    snake.pop();
  }

  // Add the new head of the snake
  var newHead = { x: x, y: y };
  snake.unshift(newHead);
}

// Draw everything on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake and the food
  drawSnake();
  drawFood();

  // Move the snake
  moveSnake();
}

// Start the game loop
setInterval(draw, 100);

// Listen for key presses
document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        direction = "left";
        break;
      case 38:
        direction = "up";
        break;
      case 39:
        direction = "right";
        break;
      case 40:
        direction = "down";
        break;
    }
  };
  
  
  //position fixed
  
  // Listen for touch events
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchend", handleTouchEnd, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchEnd(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.changedTouches[0].clientX;
  var yUp = evt.changedTouches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      direction = "left";
    } else {
      direction = "right";
    }
  } else {
    if (yDiff > 0) {
      direction = "up";
    } else {
      direction = "down";
    }
  }

  xDown = null;
  yDown = null;
}

});


window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });
});