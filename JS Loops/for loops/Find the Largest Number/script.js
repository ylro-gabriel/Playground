//Find the largest number

const numbers = [7, 12, 4, 19, 8, 15];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (largest < numbers[i]) {
    largest = numbers[i];
  }
}
console.log(largest);
