let taille = 1;
let fading = false;
let fadeAlpha = 0;

function setup() {
  createCanvas(500, 500);
  background(22, 36, 61);
  rectMode(CENTER);
}

function draw() {
  if (fading) {
    noStroke();
    fill(22, 36, 61, fadeAlpha);
    rect(width / 2, height / 2, width, height);
    fadeAlpha += 6;
    if (fadeAlpha >= 255) {
      fading = false;
      fadeAlpha = 0;
      taille = 1;
    }
    return;
  }

  let t = pow(taille / width, 2.5);
  let r = lerp(22,  105, t);
  let g = lerp(36,  177, t);
  let b = lerp(61,  255, t);

  stroke(r, g, b);
  strokeWeight(1);
  noFill();
  circle(width / 2, height / 2, taille);

  taille += 5;

  if (taille > width) {
    fading = true;
  }
}