const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input an array: ", (arr) => {
  console.log(removeDuplicates(arr.split(",").map((numb) => Number(numb))));
  rl.close();
});

function removeDuplicates(arr) {
//   return arr.filter((item, i) => arr[item] === i);
return [...new Set(arr)]
}
