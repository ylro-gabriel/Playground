const a = {
  name: "Alice",
  items: ["apple"],
};

const b = {
  ...a,
  items: [...a.items],
};

b.items.push("banana");

console.log(a.items); // ["apple"]
console.log(b.items); // ["apple", "banana"]
