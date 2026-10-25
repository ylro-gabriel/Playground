const dashboardTitle = document.querySelector("#dashboard-title");
const starters = document.querySelectorAll(".starter");
const injuredPlayers = document.querySelectorAll(".injured");
const captainA = document.querySelector("#team-a .captain");
const coachNote = document.querySelector("#coach-note");
const updateBtn = document.querySelector("#update-btn");

dashboardTitle.style.fontSize = "30px";
dashboardTitle.style.color = "navy";

for (let starter of starters) {
  starter.style.backgroundColor = "lightgreen";
}

for (let player of injuredPlayers) {
  player.style.color = "red";
  player.style.fontWeight = "bold";
}

captainA.style.border = "2px solid gold";

coachNote.style.visibility = "hidden";

updateBtn.style.backgroundColor = "orange";
updateBtn.style.borderRadius = "10px";
