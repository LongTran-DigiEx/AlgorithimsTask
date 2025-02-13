const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input an array: ", (arr) => {
  console.log(
    Number(secondHighestNumber(arr.split(",").map((numb) => Number(numb))))
      ? "Second highest number is: " +
          secondHighestNumber(arr.split(",").map((numb) => Number(numb)))
      : secondHighestNumber(arr.split(",").map((numb) => Number(numb)))
  );
  rl.close();
});

function secondHighestNumber(arr) {
  const numbArr = arr.filter((item) => Number(item));

  if (numbArr.length < 1) return "Invalid input";

  if (numbArr.length === 1)
    return "The only valid value in Array is: " + numbArr[0];

  const first = Math.max(...numbArr);

  numbArr.splice(numbArr.indexOf(first), 1);

  // Second highest number
  return Math.max(...numbArr);
}
