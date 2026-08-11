// Take an original array, make a shallow copy, let the user edit the copy, then write a function that reports what changed (e.g., "you added: hat"). This one's a good primitive-values-only exercise, since your arrays won't have nested arrays yet.
const listOfRandomThings = [
  "clock",
  "laptop",
  "printer",
  "keyboard",
  "notebook",
  "pen",
];

const [...copyListOfRandomThings] = listOfRandomThings;

function addItem(list, item, position) {
  // 0 indexed position
  list.splice(position, 0, item);
  return list;
}
console.log(addItem(copyListOfRandomThings, "knife", 3));

function compareLists(original, copy) {
  if (copy == original) {
    return `No changes in the list.`;
  } else {
  }
}
