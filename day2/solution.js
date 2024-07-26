const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
// separating the dataset into lines
const lines = data.trim().split("\n");

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

// separating game ids from the sets of games
const games = lines.map((line) => {
  const retrieveGameId = line.match(/Game \d+/);
  const gameId = retrieveGameId
    ? parseInt(retrieveGameId[0].split(" ")[1], 10)
    : null;
  const revealedCubes = line.replace(/Game \d+:\s*/, "").split(";");
  return {
    gameId,
    revealedCubes: revealedCubes.map((set) => set.trim()),
  };
});

// separating the colours and counting them
const isGameValidOrNot = (sets) => {
  for (let set of sets) {
    const counts = set.match(/\d+ \w+/g);
    let redCount = 0,
      greenCount = 0,
      blueCount = 0;

    for (let count of counts) {
      const [number, colour] = count.split(" ");
      const num = parseInt(number, 10);

      if (colour === "red") redCount += num;
      if (colour === "green") greenCount += num;
      if (colour === "blue") blueCount += num;
    }
    if (redCount > maxRed || greenCount > maxGreen || blueCount > maxBlue) {
      return false;
    }
  }
  return true;
};

// summing the valid colours
let sumOfValidGameIds = 0;

games.forEach((game) => {
  if (isGameValidOrNot(game.revealedCubes)) {
    sumOfValidGameIds += parseInt(game.gameId, 10);
  }
});

console.log(sumOfValidGameIds);
