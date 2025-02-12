let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your array: ", (array) => {
  inputValue = array.split(",").map((numb) => Number(numb));
  findMostOccurrence(inputValue).length > 1
    ? console.log(
        "The number which have the same (highest) occurrence are: " + findMostOccurrence(inputValue)
      )
    : console.log(
        "The highest occurrence number is: " + findMostOccurrence(inputValue)
      );
  rl.close();
});

function findMostOccurrence(arr) {
  const countsFrequent = {};

  for (let numb of arr) {
    countsFrequent[numb] = (countsFrequent[numb] || 0) + 1;
  }

  const maxCountFrequent = Math.max(...Object.values(countsFrequent));

  const mostAppearKey = Object.keys(countsFrequent).filter(
    (key) => countsFrequent[key] === maxCountFrequent
  );

  return mostAppearKey;
}
