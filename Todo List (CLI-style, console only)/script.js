// 1. Todo List (CLI-style, console only)
// Covers: push/pop/shift/unshift, access/update

// Store todos in an array of strings
// Functions: addTodo, completeTodo (remove by index or value), addUrgentTodo (unshift to front)
// Log the list after each operation so you can see the array change
const toDo = ["code", "study", "workout", "chores", "sleep"];
function addTodo(task) {
  toDo.push(task);
  return toDo;
}
function completeTodo(taskDone) {
  let removeTask = toDo.indexOf(taskDone);
  toDo.splice(removeTask, 1);
  return toDo;
}
function addUrgentTodo(taskUrgent) {
  toDo.unshift(taskUrgent);
  return toDo;
}

console.log(toDo);
console.log(addTodo("draw"));
console.log(completeTodo("workout"));
console.log(addUrgentTodo("eat"));
