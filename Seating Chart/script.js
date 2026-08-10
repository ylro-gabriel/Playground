// 4. Seating Chart / Grid Locker System
// Covers: 2D arrays, access/update

// Represent a classroom or theater as rows x seats (2D array)
// assignSeat(row, col, name), isSeatTaken(row, col), printChart()
const theaterSits = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];
console.log(theaterSits);

function assignSeat(row, col, name) {
  theaterSits[row][col] = name;
  return console.log(theaterSits);
}
function isSeatTaken(row, col) {
  if (
    theaterSits[row][col] === 0 ||
    theaterSits[row][col] === false ||
    theaterSits[row][col] === null ||
    theaterSits[row][col] === ""
  ) {
    return console.log("No");
  } else {
    return console.log("Yes");
  }
}
function printChart(array) {
  return console.log(array);
}

assignSeat(3, 0, "Ylro");
isSeatTaken(3, 0);
isSeatTaken(0, 0);
printChart(theaterSits);
