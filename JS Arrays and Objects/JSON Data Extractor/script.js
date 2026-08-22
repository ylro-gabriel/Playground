const jsonString = '{"name":"Alex","age":25,"isStudent":true}';

function JSONExtractor(user) {
  user = JSON.parse(user);
  return `${user.name} is ${user.age} years old.`;
}

console.log(JSONExtractor(jsonString));
