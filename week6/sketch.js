var img1;
var img2;
var size;
var startRow;
var whichImage;

function preload() {
  img1 = loadImage("yoda.jpg");
  img2 = loadImage("charlie.jpg");
}

function setup() {
  createCanvas(1000, 1000);
  size = 5;
  startRow = 0;
  whichImage = 1;
}

function draw() {
  //background('black');
  // fill(0);

  
  for (var x = size; x < width; x = x + size * 3) {
    for (var y = size + startRow * size * 3; y < height; y = y + size * 3) {

      var c;
      if (whichImage == 1) {
        c = img1.get(x, y);
      } else {
        c = img2.get(x, y);
      }

      fill(c);
      strokeWeight(1)
      stroke(random(255), random(255), random(255));
     // blendMode(HARD_LIGHT);
      ellipse(x , y , 10, 10);
    }
  }

  startRow = startRow + 1;
  if (startRow > height / (size * 1.8)) {
    startRow = 0;
    whichImage = whichImage * -1;
    size = random(5, 5);
    var scale = 0.8;
    

  }
}