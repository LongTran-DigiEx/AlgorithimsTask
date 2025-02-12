const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the number you want to check whether it is a Armstrong number: ",
  (value) => {
    checkArmstrongNumber(Number(value))
      ? console.log(Number(value) + " is a Armstrong number.")
      : console.log(Number(value) + " is NOT a Armstrong number.");
    rl.close();
  }
);

function checkArmstrongNumber(number) {
  const numbers = number.toString().split("").map(Number);
  let sum = 0;
  numbers.forEach((numb) => {
    sum += numb ** numbers.length;
  });
  if (sum === number) {
    return true;
  } else return false;
}
