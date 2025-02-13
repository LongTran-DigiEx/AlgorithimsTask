const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a string: ", (value) => {
  parseStringToObject(value);
  rl.close();
});

function parseStringToObject(str) {
  const obj = {};
  let key = "";
  let value = `'`;
  let isKey = true;
  let subKey1 = "";
  let subKey2 = "";
  let countBraces = 0;

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === ":") {
      isKey = false;
    } else if (character === "{") {
      countBraces++;
      key = key.trim();

      if (subKey1) {
        subKey2 = key;
        obj[subKey1][subKey2] = {};
      } else {
        subKey1 = key;
        obj[subKey1] = {};
      }

      key = "";
      value = `'`;
      isKey = true;
    } else if (character === "}") {
      countBraces--;
      isKey = true;
      key = key.trim();
      value += `'`;

      if (subKey1 && !subKey2) {
        if (typeof obj[subKey1] === "object" && obj[subKey1] !== null) {
          obj[subKey1][key] = value;
        }
      } else if (subKey1 && subKey2) {
        if (
          typeof obj[subKey1][subKey2] === "object" &&
          obj[subKey1][subKey2] !== null
        ) {
          obj[subKey1][subKey2][key] = value;
        }
      } else {
        obj[key] = value;
      }
      if (countBraces === 1) {
        subKey2 = "";
      }
      if (countBraces === 0) {
        subKey1 = "";
      }
      key = "";
      value = `'`;
    } else if (character === ",") {
      isKey = true;
      value += `'`;
      key = key.trim();

      if (typeof obj[subKey1] === "object" && obj[subKey1] !== null) {
        obj[subKey1][key] = value;
      } else {
        obj[key] = value;
      }
      key = "";
      value = `'`;
    } else {
      isKey ? (key += character) : (value += character);
    }
  }
  isKey = true;
  key = key.trim();
  value += `'`;

  if (typeof obj[subKey1] === "object" && obj[subKey1] !== null) {
    obj[subKey1][key] = value;
  } else {
    obj[key] = value;
  }
  subKey1 = "";
  key = "";
  value = `'`;
  return console.dir(obj);
}
