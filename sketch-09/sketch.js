function setup() {
  createCanvas(500, 500);
  background(22, 36, 61);
  noStroke();

  let cols = 11;
  let rows = 11;
  let size = 500 / cols;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let t = (x + y) / (cols + rows - 2);
      t = pow(t, 2.5); // courbe exponentielle
      let r = lerp(22,  105, t);
      let g = lerp(36,  177, t);
      let b = lerp(61,  255, t);
      fill(r, g, b);
      circle(x * 50, y * 50, 50);
    }
  }
}

function draw() {}