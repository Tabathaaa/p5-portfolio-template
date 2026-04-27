let capture;

let motionGrid = {};
let circles = [];

const GRID = 20;

const BG = [22, 36, 61];
const FG = [105, 177, 255];

function setup() {
  createCanvas(500, 500);

  capture = createCapture(VIDEO);
  capture.size(500, 500);
  capture.hide();
}

function draw() {
  background(BG[0], BG[1], BG[2], 80);

  capture.loadPixels();

  let cols = floor(width / GRID);
  let rows = floor(height / GRID);

  for (let gx = 0; gx < cols; gx++) {
    for (let gy = 0; gy < rows; gy++) {

      let px = gx * GRID + GRID / 2;
      let py = gy * GRID + GRID / 2;

      let mirrorX = width - px;
      let idx = (floor(py) * capture.width + floor(mirrorX)) * 4;

      let rC = capture.pixels[idx];
      let gC = capture.pixels[idx + 1];
      let bC = capture.pixels[idx + 2];

      let bright = (rC + gC + bC) / 3;
      let t = bright / 255;

      let r = lerp(BG[0], FG[0], t);
      let g = lerp(BG[1], FG[1], t);
      let b = lerp(BG[2], FG[2], t);

      let size = map(bright, 0, 255, 2, GRID);

      noStroke();
      fill(r, g, b, 140);
      ellipse(px, py, size);

      let key = gx + "_" + gy;
      let prev = motionGrid[key];

      if (prev !== undefined) {
        let diff = abs(rC - prev.r) + abs(gC - prev.g) + abs(bC - prev.b);

        if (diff > 60 && random() < 0.2) {
          circles.push({
            x: px,
            y: py,
            radius: 0,
            intensity: min(diff / 150, 1),
            t: t 
          });
        }
      }

      motionGrid[key] = { r: rC, g: gC, b: bC };
    }
  }

  // 🌊 cercles
  for (let c of circles) {

    let tt = pow(c.radius / 100, 1.5);

    let r = lerp(FG[0], BG[0], tt * (1 - c.t));
    let g = lerp(FG[1], BG[1], tt * (1 - c.t));
    let b = lerp(FG[2], BG[2], tt * (1 - c.t));

    let alpha = map(c.radius, 0, 100, 200 * c.intensity, 0);

    noFill();
    strokeWeight(map(c.radius, 0, 100, 2, 0.5));
    stroke(r, g, b, alpha);

    ellipse(c.x, c.y, c.radius * 2);

    c.radius += 1.5;
  }

  circles = circles.filter(c => c.radius < 100);

  if (circles.length > 300) {
    circles.splice(0, circles.length - 300);
  }
}