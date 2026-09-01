const moves = ["rock", "paper", "scissors"];

function getRandomMove(moves) {
  let min = 0;
  let max = moves.length - 1;

  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return moves[randomNumber];
}

function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "It's a tie!";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    return "The player wins!";
  } else if (playerMove === "paper" && computerMove === "rock") {
    return "The player wins!";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    return "The player wins!";
  } else {
    return "The computer wins!";
  }
}

let playerMove = moves[0];
console.log(`Player: ${playerMove}`);
let computerMove = getRandomMove(moves);
console.log(`Computer: ${computerMove}`);
console.log(getWinner(playerMove, computerMove));
