const teams = document.querySelectorAll(".team");
const overallCount = document.getElementById("overall-count");
let totalPresentPlayers = 0;

for (const team of teams) {
  const players = team.querySelectorAll(".player");
  const attendanceCount = team.querySelector(".attendance-count");
  const attendancePercentage = team.querySelector(".attendance-percent");
  const progressFill = team.querySelector("div > .progress-fill");
  const teamResult = team.querySelector(".team-result");
  let presentCounter = 0;
  let playerCounter = players.length;

  for (const player of players) {
    const status = player.querySelector(".status");

    if (status.textContent.trim() === "Present") {
      player.style.color = "green";
      presentCounter++;
      totalPresentPlayers++;
    } else if (status.textContent.trim() === "Absent") {
      player.style.color = "red";
    } else if (status.textContent.trim() === "Late") {
      player.style.color = "orange";
    }
  }

  attendanceCount.textContent = `Present: ${presentCounter}/${playerCounter}`;

  const attendancePercent = (presentCounter / playerCounter) * 100;
  attendancePercentage.textContent = `${attendancePercent}%`;

  progressFill.style.width = `${attendancePercent}%`;

  if (attendancePercent >= 75) {
    teamResult.textContent = "Attendance requirement met";
    teamResult.style.color = "green";
  } else {
    teamResult.textContent = "Below attendance requirement";
    teamResult.style.color = "red";
  }
}

overallCount.textContent = `Overall Present Players: ${totalPresentPlayers}`;
