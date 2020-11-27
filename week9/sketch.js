
var state = "falling";
var ballX = 50;
var ballY = 0;
var ballYSpeed = 0;
var ballXSpeed = 0;
var rocketX = 253;
var rocketY = 0;
var rocketXSpeed = 0;
var angle = 0;
var centerX = 200;
var centerY = 200;
let scoreElem;

let img;
function preload() {
  img = loadImage('pin.png');
}



function setup() {
  createCanvas(800, 800);
  angle = PI / 4;
  scoreElem = createDiv('Score = 1');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'red');
}
    

function draw() {
background("black");
  
  

  if (state == "falling") {
    ballY = ballY + ballYSpeed;
    ballYSpeed = ballYSpeed +1;

    if (ballY > 560) {
      state = "rolling";
    } 
  } else if (state == "rolling") {
    ballX = ballX + ballXSpeed;
    ballXSpeed = ballXSpeed + 0.01;


    if (ballX > 500) {
      state = "launching";
    }
  } else if (state == "launching") {
    rocketX = rocketX + rocketXSpeed;
    rocketXSpeed = rocketXSpeed -1;

    if (rocketY > -100) {
      state = "rolling";
    }
  } else if (state == "finished") {
    ellipse(width/2, height/2, 50, 50);

    let d = dist(mouseX, mouseY, width/2, height/2);
    if (mouseIsPressed && d < 25) {
      state = "falling";
      ballX = 100;
      ballY = 0;
      ballYSpeed = 0;
      ballXSpeed = 0;
      rocketX = 253;
      rocketXSpeed = 0;

    }
  }

  stroke("white");
  line(0, 585, 800, 585);
  var x= centerX+sin(angle)*20;
  var y= centerY+cos(angle)*20;
  image(img, x+300, rocketX+210, 40, 120);
  
  
  fill("white");
 // ellipse(300, rocketX+50, 30, 100);
  //ellipse(300, rocketX, 20, 40);
  
  noStroke();
  fill("red");
  ellipse(ballX, ballY, 50);
  fill(0);
  ellipse(ballX-5, ballY-5, 5);
  fill(0);
  ellipse(ballX, ballY, 5);
  fill(0);
  ellipse(ballX+8, ballY-2, 5);
  
}
