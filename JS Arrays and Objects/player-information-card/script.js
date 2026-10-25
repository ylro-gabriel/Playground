const player = {
  name: "Mika",
  position: "Setter",
  jerseyNumber: 7,
  team: "Blue Eagles",
};

//Task 1: get player position
function getPlayerPosition(player) {
  return player.position;
}

//Task 2: select the HTML element with id "player-position"
const playerPosition = document.querySelector("#player-position");

//Task 3: call getPlayerPosition(player)

//Task 4: display the returned value on the webpage
playerPosition.textContent = getPlayerPosition(player);
