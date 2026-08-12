let cart = ["shirt", "shoes", "hat", "socks"];

function removeItem(list, item) {
  let itemIndex = list.indexOf(item);
  if (itemIndex > -1) {
    list.splice(itemIndex, 1);
    return list;
  } else {
    return "Item not found";
  }
}

console.log(removeItem(cart, "hat"));
