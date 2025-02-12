const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the position of the number you want to find in the Fibonacci sequence: ",
  (value) => {
    console.log("Result: " + fibonacci(Number(value)));
    rl.close();
  }
);

function fibonacci(numb) {
  if (numb <= 0) return "Only takes positive values";
  if (!numb) return "Input only takes number";

  let fibonacciArr = [];
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;

  for (let i = 0; i <= numb; i++) {
    fibonacciArr[i + 2] = fibonacciArr[i] + fibonacciArr[i + 1];
  }

  return fibonacciArr[numb];
}
