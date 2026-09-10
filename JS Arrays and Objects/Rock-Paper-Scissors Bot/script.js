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

const playerMoves = ["rock", "paper", "scissors", moves[1], moves[2]];
const score = {
  player: 0,
  computer: 0,
  ties: 0,
};

function playTournament(playerMoves, moves) {
  for (let i = 0; i < playerMoves.length; i++) {
    let currentPlayerMove = playerMoves[i];
    let computerMove = getRandomMove(moves);
    let result = getWinner(currentPlayerMove, computerMove);
    console.log(
      `Round ${i + 1}: Player chose ${currentPlayerMove}. Computer chose ${computerMove}. ${result}`,
    );

    if (result === "The player wins!") {
      score.player++;
    } else if (result === "The computer wins!") {
      score.computer++;
    } else {
      score.ties++;
    }
  }

  console.log`
  Player score: ${score.player}
  Computer score: ${score.computer}
  Ties: ${score.ties}
  `;
  return score;
}

playTournament(playerMoves, moves);
