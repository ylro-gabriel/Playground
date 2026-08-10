// Mini Inventory / Warehouse Tracker

// Products stored as an array of [name, price, quantity] (destructure these when displaying)
// 2D array representing warehouse shelves (rows = shelves, columns = slots), each holding a product name or null
// Functions: addProduct, removeProduct (push/pop/shift/unshift depending on where), placeOnShelf(row, col, product), printShelf()
// Add a search(name) function that reverses a name string for a "fun" feature (like generating a nickname) — forces you to use split/reverse/join too
const products = [
  ["notebook", 50, 100],
  ["pen", 10, 200],
  ["eraser", 5, 150],
];
const shelves = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

console.log(products);
console.log(shelves);

function addProduct(product, array) {
  array.push(product);
  return console.log(array);
}
function removeProduct(product, array) {
  product = array.indexOf(product);
}

addProduct(["pencil", 5, 250], products);

const fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits.findIndex((fruit) => fruit === "banana"));
