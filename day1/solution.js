const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.trim().split("\n");

  const linesArray = [];
  const sum = 0;

  for (let character of line) {
    if (character >= "0" && character <= "9") {
      return Number(character);
    }
  }

  return 0;
} catch (err) {
  console.error("error reading the file", err);
}
