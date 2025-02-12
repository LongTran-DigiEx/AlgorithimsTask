let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your array: ", (array) => {
  inputValue = array.split(",").map((numb) => Number(numb));
  console.log("The highest prime number is: " + findMaxNumber(inputValue));
  rl.close();
});

function findMaxNumber(arr) {
  return Math.max(...countPrimeNumber(arr));
}

function isPrimeNumber(numb) {
  if (numb <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numb); i++) {
    if (numb % i === 0) return false;
  }
  return numb > 1;
}

function countPrimeNumber(arr) {
  return arr.filter((numb) => isPrimeNumber(numb));
}
