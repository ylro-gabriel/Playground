const str = "abce";

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const firstLetter = alphabet.split("").indexOf(str[0]);
  const lastLetter = alphabet.indexOf(str.at(-1));

  //This is the range that will be the reference where the str will be compared to
  const alphabetSliced = alphabet.slice(firstLetter, lastLetter + 1);

  for (let i = 0; i < alphabetSliced.length; i++) {
    if (str[i] !== alphabetSliced[i]) {
      return alphabetSliced[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter(str));
