const matchTitle = document.querySelector("#match-title");

matchTitle.style.color = "darkred";

const captainA = document.querySelector("#team-a .captain");

captainA.style.backgroundColor = "yellow";
captainA.style.fontWeight = "bold";

const reserveA = document.querySelectorAll("#team-a .reserve");

for (let player of reserveA) {
  player.style.color = "gray";
}

const captainB = document.querySelector("#team-b .captain");

captainB.style.color = "blue";
