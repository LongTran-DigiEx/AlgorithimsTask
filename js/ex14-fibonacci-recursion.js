const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a number: ", (value) => {
  console.log(
    Number(value)
      ? "Result: " + recursiveFibonacci(Number(value))
      : "Input only takes number"
  );
  rl.close();
});

function recursiveFibonacci(n) {
  if (n < 0) return "Not taking negative values";

  if (n <= 1) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
