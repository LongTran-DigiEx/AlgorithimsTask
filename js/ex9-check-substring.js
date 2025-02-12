const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a main paragraph/word: ", (mainStr) => {
  rl.question(
    "Enter a sub paragraph/word to Check Whether a String Contains a Substring: ",
    (subStr) => {
      checkSubstring(mainStr, subStr)
        ? console.log(`"${mainStr}" is Contains a Substring "${subStr}"`)
        : console.log(
            `"${mainStr}" is NOT Contains a Substring "${subStr}"`
          );
      rl.close();
    }
  );
});

function checkSubstring(mainStr, subStr) {
  return mainStr.includes(subStr);
}
