const numbers = [3, 8, 12, 5, 7, 10, 4];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count += 1;
  }
}
console.log(count);
