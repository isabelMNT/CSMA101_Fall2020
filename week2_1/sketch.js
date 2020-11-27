var x = [];
var y = [];
var colors = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(0);

  if (mouseIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
    colors.push("red");
  }

  if (keyIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
    colors.push("black");
  }
  
  strokeWeight(4);
  
  for (var i=0; i < x.length; i=i+1) {
    // drawing to the screen
    stroke(colors[i]);
    point(x[i], y[i]);
    
    // change the point a little bit for next time
    x[i] = x[i] + random(-3, 3);
    y[i] = y[i] + random(-3, 3);
  }
}