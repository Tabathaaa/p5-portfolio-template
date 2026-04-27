let grid = [];
let cellSize = 25;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  noStroke();
  initializeGrid();
}

function initializeGrid() {
  for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      let target = random(cellSize * 0.2, cellSize * 1.8);
      grid[x][y] = {
        size: target,
        target: target,
        speed: random(0.04, 0.09)
      };
    }
  }
}

function draw() {
  background(22, 36, 61);
  fill(105, 177, 255, 100);

  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {
      let cell = grid[x][y];

      cell.size = lerp(cell.size, cell.target, cell.speed);

      if (abs(cell.size - cell.target) < 0.5) {
        cell.target = random(cellSize * 0.2, cellSize * 1.8);
      }

      ellipse(
        x * cellSize + cellSize / 2,
        y * cellSize + cellSize / 2,
        cell.size,
        cell.size
      );
    }
  }
}