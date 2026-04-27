let circles = [];

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  circles.push({ x: mouseX, y: mouseY, radius: 0 });
}

function draw() {
  background(22, 36, 61);

  for (let c of circles) {
    let t = pow(c.radius / 128, 2.5);
    let r = lerp(105, 22, t);
    let g = lerp(177, 36, t);
    let b = lerp(255, 61, t);
    let alpha = map(c.radius, 0, 128, 255, 0);

    noFill();
    strokeWeight(4);
    stroke(r, g, b, alpha);
    ellipse(c.x, c.y, c.radius * 5);
    c.radius += 1,5;
  }

  circles = circles.filter(c => c.radius < 128);
}