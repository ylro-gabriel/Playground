let groceries = ["milk", "eggs", "bread", "cheese"];

function checkItem(groceries, product) {
  let check = groceries.indexOf(product);
  if (check > -1) {
    return `Found! the item "${product}" is on the list at index ${check}.`;
  } else {
    return `Item "${product}" not found.`;
  }
}

console.log(checkItem(groceries, "banana"));
