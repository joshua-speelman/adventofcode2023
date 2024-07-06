const fs = require("fs");

function findFirstDigit(line) {
  const spelledOutDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < line.length; i++) {
    let character = line.charAt(i);
    if (character >= "0" && character <= "9") {
      return Number(character);
    }
    for (let digit of spelledOutDigits) {
      if (line.substring(i, i + digit.length) === digit) {
        return spelledOutDigits.indexOf(digit) + 1;
      }
    }
  }
  return 0;
}

function findLastDigit(str) {
  const spelledOutDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = str.length - 1; i >= 0; i--) {
    let character = str.charAt(i);
    if (character >= "0" && character <= "9") {
      return Number(character);
    }
    for (let digit of spelledOutDigits) {
      if (str.substring(i - digit.length + 1, i + 1) === digit) {
        return spelledOutDigits.indexOf(digit) + 1;
      }
    }
  }
  return 0;
}

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.trim().split("\n");

  const linesArray = [];
  let sum = 0;

  lines.forEach((line) => {
    let firstSingularDigit = findFirstDigit(line);
    let lastSingularDigit = findLastDigit(line);

    let totalValueOfSingularDigits =
      firstSingularDigit * 10 + lastSingularDigit;
    sum += totalValueOfSingularDigits;

    linesArray.push(totalValueOfSingularDigits);
  });
} catch (err) {
  console.error("error reading the file", err);
}
