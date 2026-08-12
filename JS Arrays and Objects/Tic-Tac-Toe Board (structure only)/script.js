// Tic-Tac-Toe Board (no game logic needed, just structure)
// Covers: 2D arrays specifically

// Represent the board as a 3x3 array of arrays, filled with ""
// Function to place a mark: placeMark(row, col, symbol)
// Function to print the board nicely to console
// Bonus: function to check if a row/column/diagonal is filled with the same symbol (this sneaks in loops too)

const ticTacToeBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
console.log(ticTacToeBoard);

function placeMark(row, col, symbol) {
  ticTacToeBoard[row][col] = "x";
  return console.log(ticTacToeBoard);
}

placeMark(1, 1, "x");
placeMark(0, 0, "x");
placeMark(2, 2, "x");

// cannot do the bonus yet
