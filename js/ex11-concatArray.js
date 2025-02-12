const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input the first array: ", (arr1) => {
  rl.question("Input the second array: ", (arr2) => {
    console.log(
      concatArr(
        arr1.split(",").map((numb) => Number(numb)),
        arr2.split(",").map((numb) => Number(numb))
      )
    );
    rl.close();
  });
});

function concatArr(arr1, arr2) {
  const arr = arr1.concat(arr2);
  return arr.filter((item, i) => arr.indexOf(item) === i);
}
