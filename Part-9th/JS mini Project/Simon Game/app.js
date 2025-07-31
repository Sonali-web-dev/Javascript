// Arrays to store the game sequence and user sequence
let gameSeq = [];
let userSeq = [];

// Array of button colors
let btns = ["yellow", "red", "green", "purple"];

// Game state variables
let started = false;
let level = 0;

// Select the heading element to display the level
let h2 = document.querySelector("h2");

// Start the game on keypress
document.addEventListener("keypress", function () {
  if (!started) {
    resetGame(); // Reset the game state
    nextSequence(); // Start the first sequence
    started = true;
  }
});

// Function to flash a button
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

// Function to flash a button when the user clicks
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

// Function to generate the next sequence
function nextSequence() {
  userSeq = []; // Reset user sequence for the new level
  level++; // Increment the level
  h2.innerText = `Level ${level}`; // Update the level display

  // Generate a random button color
  let randIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randIdx];
  gameSeq.push(randomColor); // Add the color to the game sequence

  // Flash the button for the generated color
  let btn = document.querySelector(`.${randomColor}`);
  btnFlash(btn);

  console.log("Game Sequence:", gameSeq); // Debugging
}

// Function to check the user's answer
function checkAns(currentLevel) {
  // Check if the user's input matches the game sequence
  if (userSeq[currentLevel] === gameSeq[currentLevel]) {
    // If the user has completed the sequence
    if (userSeq.length === gameSeq.length) {
      setTimeout(nextSequence, 1000); // Move to the next level
    }
  } else {
    // If the user makes a mistake
    gameOver(); // Trigger game over logic
  }
}

// Function to handle button clicks
function btnPress() {
  let btn = this; // Get the clicked button
  userFlash(btn); // Flash the button for user feedback

  let userColor = btn.getAttribute("id"); // Get the button's color
  userSeq.push(userColor); // Add the color to the user's sequence

  console.log("User Sequence:", userSeq); // Debugging

  // Check the user's answer
  checkAns(userSeq.length - 1);
}

// Function to handle game over
function gameOver() {
  h2.innerText = "Game Over! Press any key to restart."; // Display game over message
  console.log("Wrong Sequence! Game Over."); // Debugging

  // Flash all buttons to indicate game over
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.add("game-over");
    setTimeout(() => btn.classList.remove("game-over"), 500);
  });

  resetGame(); // Reset the game state
}

// Function to reset the game
function resetGame() {
  level = 0; // Reset the level
  gameSeq = []; // Clear the game sequence
  userSeq = []; // Clear the user sequence
  started = false; // Reset the game state
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click", btnPress);
});