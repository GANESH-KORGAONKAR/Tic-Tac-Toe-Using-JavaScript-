# Tic Tac Toe Game

This project was built as part of my journey to learn JavaScript. While practicing, I decided to create this classic Tic Tac Toe game to solidify my understanding of DOM manipulation, event handling, and game logic. I hope you enjoy it and find the code useful!

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [How to Use](#how-to-use)
- [Sample Output](#sample-output)
- [Acknowledgements](#acknowledgements)

---

## Description

This is a simple web-based implementation of the Tic Tac Toe game, also known as "Noughts and Crosses" or "X's and O's." The game allows two players to take turns marking the cells on a 3x3 grid until one player achieves a winning combination or the game ends in a draw.

This project helped me gain hands-on experience with:
- JavaScript event listeners
- DOM manipulation
- Game state management
- CSS styling for interactive UI

---

## Features

- **Interactive Game Board**: A 3x3 grid that allows players to click and play their turns.
- **Winning Combination Highlight**: The winning tiles are highlighted to show how the game was won.
- **Score Counter**: Keeps track of how many games each player has won.
- **Reset and New Game Options**: Options to reset the game or start a new round.
- **Game Start Button**: Hides the game board until the user clicks "Start Game."
- **Draw Handling**: Displays a message if the game ends in a draw.

---

## Requirements

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Basic understanding of how to open and run an HTML file in a browser.

---

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Start Game" button to display the game board.
4. Take turns clicking on the cells to play the game:
   - Player X always starts first.
   - Player O follows.
5. The game will:
   - Highlight the winning tiles if a player wins.
   - Show a draw message if no winning combination is achieved.
6. View the scoreboard to see how many games each player has won.
7. Use the "New Game" button to reset the board while keeping the score.
8. Use the "Reset Game" button to reset both the board and the score.

---

## Sample Output
### Game Start
- A blank 3x3 board appears after clicking the "Start Game" button.
![Game Start Window](/Outhput/Tic-Tac-Toe%20Game%20Game%20Start%201.png)
![Blnak Grid](/Outhput/Tic-Tac-Toe%20Game%20Game%20Start%202.png)

### During Gameplay
- Players take turns, and their marks (X or O) appear in the cells they click.
![Gameplay](/Outhput/Tic-Tac-Toe%20Game%20During%20Gameplay.png)

### Winner Detected
- A message announces the winner (e.g., "Congratulations, Winner is X").
- The winning combination is highlighted in a distinct color.
- The score is updated below the game board.
![Winner](/Outhput/Tic-Tac-Toe%20Game%20Winner%20Detected%201.png) 
![winning combination is highlighted](/Outhput/Tic-Tac-Toe%20Game%20Winner%20Detected%202.png)

### Draw
- If all cells are filled without a winner, the message "Game was a Draw" is displayed.
![Draw](/Outhput/Tic-Tac-Toe%20Game%20Draw.png)

---

## Acknowledgements

This project was inspired by Shradha Khapra's JavaScript tutorials and project guides. I added several additional features to her base implementation, such as:
- Highlighting the winning tiles.
- A persistent score counter for players.

I also used ChatGPT for code enhancements, structured comments, and additional functionality.

---

Thank you for checking out my Tic Tac Toe project! I hope it helps you as much as it helped me in my learning journey. Happy coding!

