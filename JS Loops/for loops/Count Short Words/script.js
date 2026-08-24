const words = ["cat", "elephant", "dog", "bird", "ant", "giraffe"];

let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length <= 3) {
    count++;
  }
}
console.log(count);
