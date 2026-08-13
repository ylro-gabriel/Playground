const company = {
  name: "TechCorp",
  founded: 2015,
  departments: [
    {
      name: "Engineering",
      manager: "Sarah",
      employees: [
        {
          name: "Alice",
          role: "Frontend Dev",
          skills: ["React", "CSS", "JavaScript"],
        },
        { name: "Bob", role: "Backend Dev", skills: ["Node.js", "SQL"] },
      ],
    },
    {
      name: "Design",
      manager: "Mike",
      employees: [
        {
          name: "Charlie",
          role: "UI Designer",
          skills: ["Figma", "Illustrator"],
        },
      ],
    },
  ],
  headquarters: {
    address: {
      street: "123 Tech Ave",
      city: "San Francisco",
      country: "USA",
    },
  },
};

console.log(company.headquarters.address.city);
console.log(company.departments[0].manager);
console.log(company.departments[0].employees[1].role);
console.log(company.departments[0].employees[0].skills[1]);
console.log(company.departments[1].name);
console.log(company.departments[0].employees[0].skills[0]);
function getEmployeeSkill(company, deptIndex, empIndex, skillIndex) {
  return company.departments[deptIndex].employees[empIndex].skills[skillIndex];
}
console.log(company.headquarters.address.city); // "San Francisco"
// ...and so on for the rest

console.log(getEmployeeSkill(company, 0, 1, 0)); // "Node.js"
