const matches = document.querySelectorAll("#matches .match");
for (let match of matches) {
  let status = match.querySelector(".status");
  if (status.textContent === "Waiting") {
    status.textContent = "Ready to Start";
  }
}
