const cart = {
  customer: "Alice",
  total: 49.99,
  items: ["shirt", "hat"],
};

function buggyClone(obj) {
  return obj;
}

const cartBackup = buggyClone(cart);

cart.total = 99.99;
console.log(cartBackup);
// This happens because the copy made was 'shallow copy by reference' which means the copy was referencing to the original object.

function realClone(obj) {
  return { ...obj };
}

const cartBackup2 = realClone(cart);
cart.total = 100;
console.log(cartBackup2.total);
//did not changed because it made an actual copy, not a reference

cart.items.push("shoes");
console.log(cartBackup2.items);

function deepCloneItems(obj) {
  return { ...obj, items: [...obj.items] };
}
const cart2 = { customer: "Bob", total: 20, items: ["socks"] };
const cartBackup3 = deepCloneItems(cart2);
cart2.items.push("gloves");
console.log(cartBackup3.items); // ["socks"] — NOT affected this time
console.log(cart2.items); // ["socks", "gloves"]
