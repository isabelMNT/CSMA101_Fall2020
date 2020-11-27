function Light(initX, initY) {
  this.x = initX;
  this.y = initY;
  this.turnOnLights = random(17.4, 17.8);
  this.turnOffLights = random(5.7, 5.9);
  
  this.draw = function() {
    push();
    translate(this.x, this.y);
    line(0, 0, 0, -10);
    line(0, -10, 2, -10);
    pop();
  }
  
  this.lights = function() {
    push();
    translate(this.x, this.y);
    blendMode(SOFT_LIGHT);
    if (hours > this.turnOnLights || hours < this.turnOffLights) {
      noStroke();
      rotate(radians(60));
      fill(255, 255, 63, random(117, 137));
      ellipse(0, 0, 25, 30);
      fill(255, 255, 63, random(235, 255));
      ellipse(0, 0, 16, 20);
    }
    pop();
  }
  
  this.collapse = function() {
    this.turnOnLights = 24;
    this.turnOffLights = 0;
  }
}