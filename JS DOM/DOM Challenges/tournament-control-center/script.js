const matches = document.querySelectorAll("#matches .match");
for (let match of matches) {
  let status = match.querySelector(".status");
  let matchTitle = match.querySelector(".match-title");

  if (status.textContent === "Waiting") {
    status.textContent = "Ready to Start";
    matchTitle.textContent += " (Upcoming)";
  } else if (status.textContent === "Live") {
    status.textContent = "Match in Progress";
  }
}
