function Christoph(initX, initY) {
  this.x = initX;
  this.y = initY;
  // GH: modified
  this.roofHeight = random(25, 250);
  // add two parameters here

  this.draw = function() {
    // all the drawing goes here
    push();
    translate(this.x, this.y);

    // GH: added
    scale(0.25, 0.25);

    strokeWeight(1 + this.roofHeight * 0.05);
    line(0, 0 - this.roofHeight, 50, 25 - this.roofHeight);
    line(50, 25 - this.roofHeight, 100, 0 - this.roofHeight);
    line(0, 0 - this.roofHeight, 0, 75);
    line(100, 0 - this.roofHeight, 100, 75);
    line(50, 25 - this.roofHeight, 50, 100);
    line(0, 75, 50, 100);
    line(50, 100, 100, 75);
    line(0, 0 - this.roofHeight, 50, -25 - this.roofHeight);
    line(50, -25 - this.roofHeight, 100, 0 - this.roofHeight);
    //rect(0, 0, 100, 100);
    //fill("red");
    //triangle(0, 0, 50, -1*this.roofHeight, 100, 0);
    pop();
  }

  // remove this (was just to show how
  // to write additional methods)
  this.growRoof = function(howMuch) {
    this.roofHeight = this.roofHeight + howMuch;
    print(this.roofHeight);
  }

  this.collapse = function() {
    // when this function is called,
    // your building should somehow
    // begin to disintegrate
  }
}