function setup() {
  createCanvas(500, 500);
  background(22, 36, 61);
  translate(width / 2, height / 2);
  
  stroke(105, 177, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  let a = 3;
  let b = 2;
  for (let theta = 0; theta < 15 * TWO_PI; theta += 0.1) {
    let r = a + b * theta;
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape();
}
