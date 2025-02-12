let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the number you want to calculate using the factorial method: ",
  (value) => {
    inputValue = Number(value);
    console.log("Result: " + factorial(inputValue));
    rl.close();
  }
);

function factorial(numb) {
  if (numb === 1) return 1;

  return numb * factorial(numb - 1);
}
