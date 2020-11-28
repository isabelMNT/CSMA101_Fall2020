var x1 = [];
var y1 = [];
var colors = [];


function setup() {
  createCanvas(800, 800);
}

function draw() { 
  
  background('gray');
  noStroke();
  fill('yellow')
  ellipse(100,100,100)
  
  side(0, 400);
  side(100, 400);
  side(200, 400);
  side(300, 400);
  side(400, 400);
  side(500, 400);
  side(600, 400);
  side(700, 400);
  side(800, 400);

    if (mouseIsPressed) {
    x1.push(mouseX);
    y1.push(mouseY);
    colors.push('green');

  }


  for (var i = 0; i < x1.length; i = i + 1) {
    // drawing to the screen 
    strokeWeight(5);
    stroke(colors[i]);
    point(x1[i], y1[i]);


    x1[i] = x1[i] + random(-5, 5);
    y1[i] = y1[i] + random(-5, 5);
  }


  function bldg(x, y) {
    
    stroke(.5);
    fill('black')
    quad(x + 3 * 5, y, x + 3 * 5, height, x - 3 * 5, height, x - 3 * 5, y);
    stroke(.5);
    
    noStroke();
    fill('black')
    quad(x + 3.5 * 5, y, x, y + 2 * 5, x - 3.5 * 5, y, x, y - 2 * 5);

  }

  function side(x, y) {

    bldg(x + 20 + 50, y);
    bldg(x, y + 100);
    bldg(x + 150, y + 150);
    bldg(x + 20, y + 200);
    bldg(x + 40, y + 300);
    
    
    

  }
}