const user = { name: "Alice", age: 25 };

const json = JSON.stringify(user);

console.log(json);

const jsString = JSON.parse(json);
console.log(jsString);
