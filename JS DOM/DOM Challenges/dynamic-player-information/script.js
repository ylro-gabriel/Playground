const player = {
  name: "Mika",
  position: "Setter",
  jerseyNumber: 7,
  team: "Blue Eagles",
};

/*Task 1: Create a function that returns any requested property from the player */
function getPlayerDetail(player, property) {
  return player[property];
}

//Task 2: Select all 4 span elements
const playerName = document.getElementById("player-name");
const playerPosition = document.getElementById("player-position");
const playerJersey = document.getElementById("player-jersey");
const playerTeam = document.getElementById("player-team");

//Task 3: use getPlayerDetail() to display each player's information in the page

playerName.textContent = getPlayerDetail(player, "name");
playerPosition.textContent = getPlayerDetail(player, "position");
playerJersey.textContent = getPlayerDetail(player, "jerseyNumber");
playerTeam.textContent = getPlayerDetail(player, "team");
