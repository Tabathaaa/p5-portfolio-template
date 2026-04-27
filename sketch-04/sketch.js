let t = 0;

const BG = [22, 36, 61];
const FG = [105, 177, 255];

function setup() {
  createCanvas(500, 500);
  colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
  t += 0.008;
  background(BG[0], BG[1], BG[2], 40);
  let m = 50;
  drawCell(m, m, 500 - m * 2, 0, 5);
}

function drawCell(x, y, size, depth, maxDepth) {
  let nx = noise(x * 0.003, y * 0.003, t * 0.4);
  let ny = noise(x * 0.003 + 100, y * 0.003 + 100, t * 0.4);
  let offsetX = map(nx, 0, 1, -size * 0.08, size * 0.08);
  let offsetY = map(ny, 0, 1, -size * 0.08, size * 0.08);

  let cx = x + size / 2 + offsetX;
  let cy = y + size / 2 + offsetY;

  let pulse = noise(x * 0.004, y * 0.004, t * 0.6 + depth * 0.3);
  let r = (size / 2) * map(pulse, 0, 1, 0.75, 1.05);

  if (depth >= maxDepth || size < 8) {
    noFill();
    stroke(FG[0], FG[1], FG[2], 35);
    strokeWeight(0.5);
    ellipse(cx, cy, r * 2, r * 2);
    return;
  }

  let cellNoise = noise(x * 0.005, y * 0.005, t * 0.5);
  let activeDepth = map(cellNoise, 0, 1, 0.5, maxDepth - 0.5);

  if (depth < activeDepth) {
    let splitX = noise(x * 0.01, t * 0.3);
    let splitY = noise(y * 0.01 + 50, t * 0.3);
    let sx = size * map(splitX, 0, 1, 0.42, 0.58);
    let sy = size * map(splitY, 0, 1, 0.42, 0.58);

    drawCell(x,      y,      sx,        depth + 1, maxDepth);
    drawCell(x + sx, y,      size - sx, depth + 1, maxDepth);
    drawCell(x,      y + sy, sx,        depth + 1, maxDepth);
    drawCell(x + sx, y + sy, size - sx, depth + 1, maxDepth);
  } else {
    let pad = size * 0.05;
    let bright = map(depth, 0, maxDepth, 1.0, 0.3);
    let alpha = depth <= 1 ? 255 : map(pulse, 0, 1, 180, 255);
    let rd = r - pad;

    noStroke();
    fill(FG[0] * bright, FG[1] * bright, FG[2] * bright, alpha);
    ellipse(cx, cy, rd * 2, rd * 2);

    if (depth <= 1) {
      let innerR = rd * 0.55;
      fill(FG[0] * bright, FG[1] * bright, FG[2] * bright, alpha);
      ellipse(cx, cy, innerR * 2, innerR * 2);
    }

    noFill();
    stroke(FG[0], FG[1], FG[2], 30);
    strokeWeight(0.5);
    ellipse(cx, cy, rd * 2, rd * 2);
  }
}