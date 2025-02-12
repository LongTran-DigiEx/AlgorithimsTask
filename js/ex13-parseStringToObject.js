function parseStringToObject(str) {
  const obj = {};
  let key = "";
  let value = `'`;
  let isKey = true;

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === ":") {
      isKey = false;
    } else if (character === "{") {
      if (str[i + 1] === "{") {
      } else if (str[i + 1] === ",") {
      }
    } else if (character === "}") {
      key = key.trim();
      obj[key] = value;
    } else if (character === ",") {
      isKey = true;
      value += `'`;
      key = key.trim();
      obj[key] = value;
      key = "";
      value = "";
    } else {
      isKey ? (key += character) : (value += character);
    }
  }
  return obj;
}

console.log(
  parseStringToObject(
    "key1:value1, key2:{subkey1:subvalue1, subkey2:subvalue2}, key3:value3"
  )
);
