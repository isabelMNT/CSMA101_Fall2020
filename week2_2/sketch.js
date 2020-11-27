var x = [];
var y = [];
var speed = [];
var angle;
let scoreElem;




function setup() {
  createCanvas(800, 800);
  angle = PI / 4;


}

function draw() {
  //background('black');

  for (var i = 1; i < x.length; i = i + 1) {

    translate(width / 2, height / 2);
    rotate(angle);
    scale(-1, 1);
    translate(-width / 2, -height / 2);
    stroke('black')
    strokeWeight(1);

    var size;
    size = random(0, 50);
    blendMode(SOFT_LIGHT);
    fill(random(255), random(255), random(255));
    ellipse(x[i], y[i], size, size);

    var size;
    size = random(0, 100);
    noFill();
    stroke(5, 0, frameCount % 300) + 5;
   ellipse(x[i], y[i], size, size);


   





      var dx = mouseX - x[i];
      var dy = mouseY - y[i];

      var dist = abs(dx) + abs(dy);

      if (dist > 0) {
        //rect(x, y, 20)
        dx = dx / dist * speed[i];
        dy = dy / dist * speed[i];
      }

      x[i] = x[i] + dx;
      y[i] = y[i] + dy;
    }
  }

  function mouseClicked() {
    print("mouseClicked frame " + frameCount);
    x.push(mouseX);
    y.push(mouseY);
    speed.push(random(10, 10));

  }


