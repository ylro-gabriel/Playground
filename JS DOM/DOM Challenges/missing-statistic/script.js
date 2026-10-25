const player = {
  name: "Mika",
  position: "Setter",
  jerseyNumber: 0,
  team: "Blue Eagles",
};

//task 1: create a function that checks whether the requested property exist directly on the player object

function hasPlayerDetail(player, property) {
  return Object.hasOwn(player, property);
}

//task 2: select both status elements
const heightStatus = document.getElementById("height-status");
const positionStatus = document.getElementById("position-status");

//task 3: display the returned boolean values on the webpage
heightStatus.textContent = hasPlayerDetail(player, "height");
positionStatus.textContent = hasPlayerDetail(player, "position");

/*
Player Report
*/

//task 1: create a function that returns the property's value if it exist. otherwise, return "No such property"

function getPlayerDetailOrMessage(player, property) {
  const checker = hasPlayerDetail(player, property);
  if (checker) {
    return player[property];
  } else {
    return "No such property";
  }
}

const reportPosition = document.getElementById("report-position");
const reportHeight = document.getElementById("report-height");
const reportJersey = document.getElementById("report-jersey");

reportPosition.textContent = getPlayerDetailOrMessage(player, "position");
reportHeight.textContent = getPlayerDetailOrMessage(player, "height");
reportJersey.textContent = getPlayerDetailOrMessage(player, "jerseyNumber");
