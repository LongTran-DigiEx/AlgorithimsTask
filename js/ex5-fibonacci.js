let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the position of the number you want to find in the Fibonacci sequence: ",
  (value) => {
    inputValue = Number(value);
    console.log("Result: " + fibonacci(inputValue));
    rl.close();
  }
);

function fibonacci(numb) {
  let fibonacciArr = [];
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;

  for (let i = 0; i <= numb; i++) {
    fibonacciArr[i + 2] = fibonacciArr[i] + fibonacciArr[i + 1];
  }

  return fibonacciArr[numb];
}
