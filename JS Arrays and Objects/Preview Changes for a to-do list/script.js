// "Preview changes" for a to-do list
// Let a user try reordering or adding tasks to a copy of their list, and only save it to the "real" list if they confirm. The original stays safe until then.
const tasks = ["laundry", "broom floor", "wipe walls", "feed dogs"];
console.log(tasks);

// 3 parameters (array - "the list",string- "item to reposition",number- "in what position [1 indexed]")
function rePositionItem(list, item, position) {
  let [...copyList] = list;
  copyList.splice(position - 1, 0, item);
  copyList.splice(position + 1, 1);
  return console.log(copyList);
}
rePositionItem(tasks, "broom floor", 1);
console.log(tasks);

//3 parameters (array - list, string - item to add, number - in what position [1 indexed])
function addItem(list, item, position) {
  let [...copyList] = list;
  copyList.splice(position - 1, 0, item);
  return console.log(copyList);
}
addItem(tasks, "dishes", 2);
