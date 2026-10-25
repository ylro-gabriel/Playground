const students = document.querySelectorAll(".student");
let countHighStress = 0;
let highCount = document.querySelector("#high-count");

for (const student of students) {
  const stress = student.querySelector(".stress");

  if (stress.textContent.trim() === "Low") {
    student.style.backgroundColor = "lightgreen";
  } else if (stress.textContent.trim() === "Moderate") {
    student.style.backgroundColor = "khaki";
  } else if (stress.textContent.trim() === "High") {
    student.style.backgroundColor = "lightcoral";
    countHighStress++;
  }
}

if (countHighStress >= 2) {
  highCount.style.color = "red";
} else {
  highCount.style.color = "green";
}
highCount.textContent = `High Stress Students: ${countHighStress}`;
