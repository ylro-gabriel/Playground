const jsonString = `[
  {"name":"Alex","age":25,"isStudent":true},
  {"name":"Maria","age":30,"isStudent":false},
  {"name":"John","age":19,"isStudent":true}
]`;

function updateStudentAge(json, studentName, newAge) {
  json = JSON.parse(json);

  for (let i = 0; i < json.length; i++) {
    if (json[i]["name"] === studentName) {
      json[i]["age"] = newAge;
    }
  }

  json = JSON.stringify(json);
  return json;
}

const result = updateStudentAge(jsonString, "John", 20);

console.log(result);
