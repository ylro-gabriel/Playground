const matchTitle = document.getElementById("dashboard-title");
const matches = document.querySelectorAll("#matches .match");
const readyCount = document.getElementById("ready-count");
const liveCount = document.getElementById("live-count");
let statusReadyCounter = 0;
let statusLiveCounter = 0;

matchTitle.textContent = "Volleyball Championship Dashboard";

for (let match of matches) {
  let status = match.querySelector(".status");
  let title = match.querySelector(".match-title");

  if (status.textContent === "Waiting") {
    status.textContent = "Ready to Start";
    title.textContent += " (Upcoming)";
    statusReadyCounter++;
  } else if (status.textContent === "Live") {
    status.textContent = "Match in Progress";
    title.textContent += " (Live)";
    statusLiveCounter++;
  }
}

readyCount.textContent = `Ready matches: ${statusReadyCounter}`;
liveCount.textContent = `Live matches: ${statusLiveCounter}`;
