// Select all boxes (cells), buttons, and messages
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let startBtn = document.querySelector("#start-btn"); // Start game button
let gameContainer = document.querySelector(".container"); // Game container

// Game state variables
let turnO = true; // Track the current player (true = "O", false = "X")
let count = 0; // Track moves to determine draw
let xWins = 0; // Score for X
let oWins = 0; // Score for O

// Winning combinations
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5], 
  [6, 7, 8],
];

// Function to start the game and show the game box
const startGame = () => {
  resetGame(); // Ensure the game is reset before starting
  gameContainer.classList.remove("hide"); // Show the game container
  startBtn.classList.add("hide"); // Hide the start button
};

// Function to reset the game state for a new round
const resetGame = () => {
  turnO = true; // Reset to Player "O"'s turn
  count = 0; // Reset move count
  enableBoxes(); // Enable and clear all boxes
  msgContainer.classList.add("hide"); // Hide the message container
};

// Add event listeners to all game boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // Player O's turn
      box.innerText = "O";
      turnO = false; // Switch to Player X
    } else {
      // Player X's turn
      box.innerText = "X";
      turnO = true; // Switch to Player O
    }
    box.disabled = true; // Disable clicked box
    count++; // Increment move count

    let isWinner = checkWinner(); // Check for winner

    if (count === 9 && !isWinner) {
      gameDraw(); // Handle draw condition
    }
  });
});

// Function to handle a draw scenario
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide"); // Show message
  disableBoxes(); // Disable further moves
};

// Function to disable all boxes
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Function to enable and clear all boxes
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false; // Enable box
    box.innerText = ""; // Clear text
  }
};

// Function to display the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide"); // Show message

  // Update the score for the winner
  if (winner === "X") {
    xWins++;
  } else {
    oWins++;
  }

  // Update score display
  document.querySelector("#scoreboard").innerText = `Score: X = ${xWins}, O = ${oWins}`;

  disableBoxes(); // Disable further moves
};

// Function to check if there is a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val); // Announce the winner
        return true; // Winner found
      }
    }
  }
  return false; // No winner yet
};

// Add event listeners for the reset and new game buttons
newGameBtn.addEventListener("click", resetGame); // Reset the board for a new game
resetBtn.addEventListener("click", () => {
  // Full reset: Clear scores and reset game
  xWins = 0;
  oWins = 0;
  document.querySelector("#scoreboard").innerText = `Score: X = ${xWins}, O = ${oWins}`;
  resetGame();
});

// Add event listener for the start game button
startBtn.addEventListener("click", startGame);
