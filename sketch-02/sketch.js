function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(22, 36, 61, 30);
  let cols = 4;
  let rows = 20;
  let spacingX = width / cols ;
  let spacingY = height / rows ;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacingX + spacingX / 2;
      let y = j * spacingY + spacingY / 2;
      let w = sin(frameCount * 0.05 + i + j) * 60 + 80;
      let h = cos(frameCount * 0.05 + i - j) * 60 + 80;
      
      stroke(105, 177, 255);
      ellipse(x, y, w, h);
    }
  }
}