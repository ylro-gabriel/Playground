const teams = document.querySelectorAll(".team");

// this lets me select team-a and team-b by looping
for (const team of teams) {
  const players = team.querySelectorAll(".player");
  const readyCounters = team.querySelector(".ready-count");
  let readyCounter = 0;
  const teamStatus = team.querySelector(".team-status");

  //this lets me loop through the players of each team
  for (const player of players) {
    //this lets me select the .status of the current player of the loop
    const status = player.querySelector(".status");

    if (status.textContent.trim() === "Ready") {
      player.style.backgroundColor = "lightgreen";
      readyCounter++;
    } else if (status.textContent.trim() === "Injured") {
      player.style.backgroundColor = "lightcoral";
    }
  }

  if (readyCounter < 4) {
    teamStatus.textContent = "Not eligible";
    teamStatus.style.color = "red";
  } else {
    teamStatus.textContent = "Eligible for 4v4";
    teamStatus.style.color = "green";
  }

  readyCounters.textContent = `Ready Players: ${readyCounter}`;
}
