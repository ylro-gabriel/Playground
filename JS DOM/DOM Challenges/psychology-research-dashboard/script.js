const studyTitle = document.querySelector("#study-title");
studyTitle.style.fontSize = "36px";

const highStressA = document.querySelectorAll("#group-a .high-stress");
for (let student of highStressA) {
  student.style.backgroundColor = "lightcoral";
}

const lowStress = document.querySelectorAll(".low-stress");

for (let student of lowStress) {
  student.style.color = "green";
}

const confidential = document.querySelector("#confidential");
confidential.style.visibility = "hidden";

const reportBtn = document.querySelector("#report-btn");
reportBtn.style.border = "2px solid blue";
reportBtn.style.borderRadius = "12px";
