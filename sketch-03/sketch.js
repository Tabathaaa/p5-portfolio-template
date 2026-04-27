let t = 0;
let paused = false;
const N = 10;

const BG = [22, 36, 61];
const FG = [105, 177, 255];

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
  if (!paused) t += 0.04;

  background(BG[0], BG[1], BG[2]);
  noFill();
  strokeWeight(2);
  translate(width / 2, height / 2);

  // Cercles principaux
  for (let i = 0; i < N; i++) {
    let progress = i / N;
    let phase = progress * TWO_PI;
    let pulse = sin(t + phase);
    let r = map(i, 0, N - 1, 30, 230) + pulse * 8;
    let bright = map(pulse, -1, 1, 0.6, 1.0);
    let alpha = map(pulse, -1, 1, 180, 255);
    stroke(FG[0] * bright, FG[1] * bright, FG[2] * bright, alpha);
    ellipse(0, 0, r * 2, r * 2);
  }

  // Cercles secondaires
  for (let i = 0; i < N; i++) {
    let progress = i / N;
    let phase = progress * TWO_PI;
    let pulse = sin(t * 1.3 + phase + PI);
    let r = map(i, 0, N - 1, 25, 220) + pulse * 5;
    let alpha = map(i, 0, N - 1, 75, 38);
    stroke(FG[0], FG[1], FG[2], alpha);
    ellipse(0, 0, r * 2, r * 2);
  }
}