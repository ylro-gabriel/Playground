const jsonString = `[
  {"name":"Alex","age":25,"isStudent":true},
  {"name":"Maria","age":30,"isStudent":false},
  {"name":"John","age":19,"isStudent":true},
  {"name":"Sarah","age":27,"isStudent":false}
]`;

function getStudents(json) {
  json = JSON.parse(json);
  let arr = [];
  for (let i = 0; i < json.length; i++) {
    if (json[i]["isStudent"]) {
      arr.push(json[i]["name"]);
    }
  }

  return arr;
}

console.log(getStudents(jsonString));
