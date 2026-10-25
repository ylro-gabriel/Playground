const players = document.querySelectorAll(".player");
const dashboardTitle = document.querySelector("#dashboard-title");

for (let player of players) {
  let status = player.querySelector(".status");

  if (status.textContent === "Ready") {
    player.style.backgroundColor = "lightgreen";
  } else if (status.textContent === "Injured") {
    player.style.backgroundColor = "lightcoral";
  } else if (status.textContent === "Resting") {
    player.style.backgroundColor = "lightgray";
  }
}

dashboardTitle.style.color = "navy";
