const numbers = [4, 15, 8, 22, 10, 31, 6];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count++;
  }
}

console.log(count);
