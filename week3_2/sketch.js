let x;
let y;

let xspeed;
let yspeed;

let minion;

let r, g, b;

function preload() {
  minion = loadImage("minion.png");
}

function setup() {
  createCanvas(800, 800);
  x = random(800);
  y = random(800);
  xspeed = 5;
  yspeed = 12;
}

function pickColor() {
  r = random(256);
  g = random(256);
  b = random(256);
}

function draw() {

  if (mouseIsPressed) {
    pickColor();
    background(r, b, g);


    image(minion, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + minion.width >= 800) {
      xspeed = -xspeed;
      x = 800 - minion.width;
      pickColor();
    } else if (x <= 0) {
      xspeed = -xspeed;
      x = 0;
    }
    if (y + minion.height >= 800) {
      yspeed = -yspeed;
      y = 800 - minion.height;
      pickColor();
    } else if (y <= 0) {
      yspeed = -yspeed;
      y = 0;
    }
  }
}