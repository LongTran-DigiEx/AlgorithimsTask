const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the number you want to calculate using the factorial method: ",
  (value) => {
    console.log("Result: " + factorial(Number(value)));
    rl.close();
  }
);

function factorial(numb) {
  if (numb <= 0) return "Only takes positive values";
  if (!numb) return "Input only takes number";

  if (numb === 1) return 1;

  return numb * factorial(numb - 1);
}
