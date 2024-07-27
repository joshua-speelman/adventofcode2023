const fs = require("fs");

// Read and parse the data
const data = fs.readFileSync("input.txt", "utf8");
const lines = data.trim().split("\n");

const games = lines.map((line) => {
  const retrieveGameId = line.match(/Game (\d+)/);
  const gameId = retrieveGameId ? parseInt(retrieveGameId[1], 10) : null;
  const revealedCubes = line.replace(/Game \d+:\s*/, "").split(";");
  return {
    gameId,
    revealedCubes: revealedCubes.map((set) => set.trim()),
  };
});

const getMinimumCubes = (sets) => {
  let minRed = 0,
    minGreen = 0,
    minBlue = 0;

  for (let set of sets) {
    const counts = set.match(/\d+ \w+/g) || [];
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

    // Update the minimum required cubes
    if (redCount > minRed) minRed = redCount;
    if (greenCount > minGreen) minGreen = greenCount;
    if (blueCount > minBlue) minBlue = blueCount;
  }

  return {
    minRed,
    minGreen,
    minBlue,
  };
};

let sumOfAllPowers = 0;

games.forEach((game) => {
  if (game.gameId !== null) {
    const { minRed, minGreen, minBlue } = getMinimumCubes(game.revealedCubes);
    const power = minRed * minGreen * minBlue;
    sumOfAllPowers += power;
  }
});

console.log(sumOfAllPowers);
