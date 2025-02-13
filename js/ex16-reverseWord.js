const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your word: ", (value) => {
  console.log("Result: " + reverseWord(value));
  rl.close();
});

function reverseWord(str) {
  const reversed = str.split("").reverse().join("");
  return (
    String(reversed).charAt(0).toUpperCase() +
    String(reversed).slice(1).toLowerCase()
  );
}
