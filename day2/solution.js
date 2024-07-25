const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
// separating the dataset into lines
const lines = data.trim().split("\n");

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

const games = lines.map((line) => {
  const retrieveGameId = line.match(/Game \d+/);
  const gameId = retrieveGameId ? retrieveGameId[0] : null;
  const revealedCubes = line.replace(/Game \d+:\s*/, "").split(";");
  return {
    gameId,
    revealedCubes: revealedCubes.map((set) => set.trim()),
  };
});
