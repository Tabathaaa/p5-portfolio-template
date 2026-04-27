function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(22, 36, 61, 30);
  let cols = 30;
  let rows = 15;
  let spacingX = width / cols;
  let spacingY = height / rows;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i * spacingX;
      let y1 = j * spacingY + 20;
      let x2 = x1 + spacingX;
      let y2 = y1 + sin(frameCount * 0.08 + i) * 15;
      
      stroke(105, 177, 255);
      line(x1, y1, x2, y2);
    }
  }
}