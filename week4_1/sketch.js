function setup() {
  createCanvas(800, 800);


}

function draw() {
  background('black');
  stroke('blue')
  noFill()
  rect(30, 20, 30, 200);
  rect(100, 20, 500, 30);
  rect(300, 50, 50, 300);
  rect(600, 200, 50, 300);
  rect(700, 20, 30, 200);
  rect(300, 700, 300, 30);
  rect(50, 700, 100, 30);
  rect(50, 400, 300, 30);
  pattern(0);
  pattern(frameCount / .5);
}

function pattern(angle) {
  push();
  fill(0);
  translate(200, 200);
  rotate(radians(-angle));
  for (var x = -800; x < 800; x = x + 80) {
    for (var y = -800; y < 800; y = y + 80) {
      fill('yellow');
      stroke('pink')
      strokeWeight(2);
      arc(x, y, 40, 40, PI, HALF_PI);


      push();

    }

  }
}