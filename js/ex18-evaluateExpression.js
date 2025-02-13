const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter an expression: ", (value) => {
  console.log(evaluateExpression(value));
  rl.close();
});

function evaluateExpression(str) {
  let numbers = [];
  let operators = [];

  const mathPriority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const changeToNormalMath = (exp) => {
    let normalOperator = "";

    for (let i = 0; i < exp.length; i++) {
      if (["+", "-"].includes(exp[i])) {
        let countMinus = 0;

        while (i < exp.length && ["+", "-"].includes(exp[i])) {
          if (exp[i] === "-") countMinus++;
          i++;
        }

        if (countMinus % 2 === 1) {
          normalOperator += "-";
        } else {
          normalOperator += "+";
        }
      } else {
        normalOperator += exp[i];
      }
    }

    return normalOperator;
  };

  // Case: Reduce all operator in the same expression (ex: a --- b)
  str = changeToNormalMath(str);

  const evalCalculation = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        throw new Error(`Not found operator ${operator}`);
    }
  };

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === " ") continue;

    if (!isNaN(character)) {
      let numb = "";

      while (i < str.length && !isNaN(str[i])) {
        numb += str[i++];
      }
      i--;
      numbers.push(parseFloat(numb));
    } else if (character === "(") {
      operators.push(character);
    } else if (character === ")") {
      while (operators.length > 0 && operators[operators.length - 1] !== "(") {
        const b = numbers.pop();
        const a = numbers.pop();
        const operator = operators.pop();
        numbers.push(evalCalculation(a, b, operator));
      }
      operators.pop(); // Remove "("
    } else if (Object.keys(mathPriority).includes(character)) {
      while (
        operators.length > 0 &&
        mathPriority[operators[operators.length - 1]] >= mathPriority[character]
      ) {
        const b = numbers.pop();
        const a = numbers.pop();
        const operator = operators.pop();
        if (b === 0 && operator === "/") {
          return "Unspecified value";
        } else numbers.push(evalCalculation(a, b, operator));
      }
      operators.push(character);
    }
  }

  while (operators.length > 0) {
    const b = numbers.pop();
    const a = numbers.pop();
    const operator = operators.pop();
    if (b === 0 && operator === "/") {
      return "Unspecified value";
    } else numbers.push(evalCalculation(a, b, operator));
  }

  return numbers[0];
}
