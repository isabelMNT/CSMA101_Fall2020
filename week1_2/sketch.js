var centerX;
var centerY;
var speedX;
var speedY;

function setup() {
  createCanvas(800, 800);

  centerX = 200;
  centerY = 200;
  speedX = 5;
  speedY = 0;


}

function draw() {
  //  background('black');

  speedY = speedY + 2;


  for (var x = 0; x < 800; x = x + 10) {
    for (var y = 0; y < 800; y = y + 10) {
      if (centerY > 400) {
        speedY = speedY * -0.96;
      }

      centerY = centerY + speedY;
      centerX = centerX + speedX;


      if (centerX > 800) {
        centerX = -200;
        ellipse(x, y, 4, 4, );
      }
    }






    if (mouseX < 200) {
      fill('red');
    } else if (mouseX < 400) {
      fill('blue');
    } else if (mouseX < 600) {
      fill('green');
    } else {
      fill('yellow');
    }

    ellipse(mouseX, mouseY, 50, 50);


  }
}