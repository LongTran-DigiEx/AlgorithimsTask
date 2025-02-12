const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter the number you want to check: ", (value) => {
  perfectNumber(Number(value))
    ? console.log(value + " is a Perfect number.")
    : console.log(value + " is NOT a Perfect number.");
  rl.close();
});

function perfectNumber(numb) {
  if (numb <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= numb / 2; i++) {
    if (numb % i === 0) {
      sum += i;
    }
  }
  return sum === numb;
}
