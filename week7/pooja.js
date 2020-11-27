function Pooja(initX, initY) {
  this.x = initX;
  this.y = initY;
  this.roofHeight = random(150, 250);
  this.rooflength = this.roofHeight;
  this.turnOnLights = random(17, 19);
  this.turnOffLights = random(22, 23.5);

  this.draw = function() {

    push();
    translate(this.x, this.y);
    scale(0.1, 0.1);
    fill("pink");
    rect(0, 0, 100, 100);
    fill("lightyellow");
    rect(15, 15, 25, 25);
    rect(60, 15, 25, 25);
    rect(15, 60, 25, 25);
    rect(60, 60, 25, 25);

    fill("lightblue");
    quad(-50, -100, 0, 0, 0, 100, -50, 0);


    fill("brown");
    triangle(0, 0, 50, -1 * this.roofHeight, 100, 0);
    triangle(-50, -100, 50, -1 * this.roofHeight, 0, 0);
    //quad(-50, -100, 0, -150, 50, -1 * this.roofHeight, 0, 0);
    pop();
  }

  this.growRoof = function(howMuch) {
    this.roofHeight = this.roofHeight + howMuch;
  }

  // GH: added
  this.lights = function() {
    push();
    translate(this.x, this.y);
    scale(0.1, 0.1);
    if (hours > this.turnOnLights && hours < this.turnOffLights) {
      fill("lightyellow");
      rect(15, 15, 25, 25);
      rect(60, 15, 25, 25);
      rect(15, 60, 25, 25);
      rect(60, 60, 25, 25);
    }
    pop();
  }

}