const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Enter the number you want to check whether it is an Armstrong number: ",
  (value) => {
    console.log(
      Number(value)
        ? Number(value) +
            (checkArmstrongNumber(Number(value))
              ? " is an Armstrong number."
              : " is NOT an Armstrong number.")
        : "Invalid input"
    );
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
