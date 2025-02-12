const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your word: ", (value) => {
  palindrome(value)
    ? console.log(value + " is a Palindrome sequence.")
    : console.log(value + " is NOT a Palindrome sequence.");
  rl.close();
});

function palindrome(str) {
  const strReverse = str.split("").reverse().join("");
  return strReverse === str ? true : false;
}
