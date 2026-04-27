function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(22, 36, 61, 20);
  let spacing = height / 35;
  
  for (let i = 0; i < 35; i++) {
    let y = i * spacing + spacing / 2;
    let w = sin(frameCount * 0.02 + i) * 100 + 150;
    let h = cos(frameCount * 0.02 + i) * 1 + 50;
    
    stroke(105, 177, 255);
    ellipse(width / 2, y, w, h);
  }
}