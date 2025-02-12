let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your string: ", (value) => {
  inputValue = value;
  console.log("Your string is: " + capitalize(inputValue));
  rl.close();
});

function capitalize(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
