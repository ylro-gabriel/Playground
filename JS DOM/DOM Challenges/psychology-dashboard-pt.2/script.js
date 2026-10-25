const groups = document.querySelectorAll(".group");
const totalHigh = document.querySelector("#total-high");
let stressTotal = 0;

for (const group of groups) {
  const students = group.querySelectorAll(".student");
  const highStressCount = group.querySelector(".high-count");
  const groupStressIndicator = group.querySelector(".group-status");
  let counter = 0;

  for (const student of students) {
    const stress = student.querySelector(".stress");

    if (stress.textContent.trim() === "High") {
      student.style.backgroundColor = "lightcoral";
      counter++;
      stressTotal++;
    } else if (stress.textContent.trim() === "Low") {
      student.style.backgroundColor = "lightgreen";
    } else if (stress.textContent.trim() === "Moderate") {
      student.style.backgroundColor = "khaki";
    }
  }

  highStressCount.textContent = `High Stress: ${counter}`;

  if (counter > 1) {
    groupStressIndicator.textContent = "Needs attention";
    groupStressIndicator.style.color = "red";
    groupStressIndicator.style.fontWeight = "bold";
  } else {
    groupStressIndicator.textContent = "Monitor";
    groupStressIndicator.style.color = "green";
  }
}

totalHigh.textContent = `Total High Stress: ${stressTotal}`;
if (stressTotal > 2) {
  totalHigh.style.color = "red";
} else {
  totalHigh.style.color = "green";
}
