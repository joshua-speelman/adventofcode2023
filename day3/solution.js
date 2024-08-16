const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const gridLines = data.split("\n");

let sumOfPartNumbers = 0;

// this array covers all possible adjacent cells
const directionalArray = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0], 
  [1, 1] 
];

// traversing the grid and checking for numbers
for (let row = 0; row < gridLines.length; row++) {
  for (let col = 0; col < gridLines[row].length; col++) {
    const cell = gridLines[row][col];
    if (!isNaN(cell) && cell !== " ") {
      const number = parseInt(cell, 10);
      let isPartNumber = false;

      // checking adjacent directions now
      for (let [iRow, iCol] of directionalArray) {
        const newRow = row + iRow;
        const newCol = col + iCol;

        

      }
  }
};
