const fs = require("fs");

function findFirstDigit(line) {
  for (let character of line) {
    if (character >= "0" && character <= "9") {
      return Number(character);
    }
  }
  return 0;
}

function findLastDigit(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    let character = str.charAt(i);
    if (character >= "0" && character <= "9") {
      return Number(character);
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
