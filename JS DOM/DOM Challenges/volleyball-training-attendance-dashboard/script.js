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

//Challenge 5
const roster = ["Mika", "Alex", "Jordan", "Sam", "Taylor"];

function findPlayer(roster, searchName) {
  for (const player of roster) {
    if (searchName === player) {
      return player;
    }
  }

  return `Player not found`;
}

const searchResult = document.querySelector("#search-result");

searchResult.textContent = findPlayer(roster, "Jordan");

// Challenge 6
const teamRoster = [
  {
    name: "Mika",
    position: "Setter",
    jerseyNumber: 7,
  },
  {
    name: "Alex",
    position: "Libero",
    jerseyNumber: 12,
  },
  {
    name: "Jordan",
    position: "Outside Hitter",
    jerseyNumber: 9,
  },
  {
    name: "Sam",
    position: "Middle Blocker",
    jerseyNumber: 5,
  },
];

function findPlayerProfile(roster, searchName) {
  for (const object of roster) {
    if (object["name"] === searchName) {
      return object;
    }
  }

  return "Player not found";
}

const scoutName = document.querySelector("#scout-name");
const scoutPosition = document.querySelector("#scout-position");
const scoutJersey = document.querySelector("#scout-jersey");

scoutName.textContent = findPlayer(teamRoster, "Jordan");
