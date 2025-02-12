let inputValue;

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input your string: ", (value) => {
  inputValue = value;
  countAppearance(inputValue);
  rl.close();
});

function countAppearance(str) {
  const words = str.split(" ");
  let wordCount = {};
 
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return console.dir(wordCount);
}
