// 6. Contact Card Parser (combines destructuring + arrays)
// Covers: destructuring, rest syntax

// Given an array like ["John", "Doe", 25, "Engineer", "NYC"], destructure into named variables
// Write a function formatContact([first, last, ...rest]) that returns a formatted string
// Bonus: array of multiple contact-arrays, loop through and destructure each
const person = ["John", "Doe", 25, "Engineer", "NYC"];
console.log(person);

function formatContact(array) {
  const [first, last, ...rest] = array;
  return `Identification: ${first} ${last} \nAge, Occupation, Address: ${rest}`;
}

console.log(formatContact(person));
