function Jeffrey(initX, initY) {
  this.x = initX;
  this.y = initY;

  this.draw = function() {
    // all the drawing goes here
    push();
    translate(this.x, this.y-55);
    scale(0.3, 0.3);
    fill("grey");
    rect(0, 0, 50, 200);
    noStroke();
    triangle(0,180,-25,180,0,200);
    rect(-25,0,25,180);
    stroke("black");
    line(-25,0,-25,180);
    line(-25,0,0,0);
    line(-25,0,0,0);
    line(-25,180,0,200);

    pop();
  }

  this.lights = function() {
    push();
    translate(this.x, this.y-55);
    scale(0.3, 0.3);
    //Windows
    fill("yellow");
    rect(10,10, 10,10);
    rect(10,30, 10,10);
    rect(10,50, 10,10);
    rect(10,70, 10,10);
    rect(10,110, 10,10);
    rect(10,150, 10,10);
    
    rect(30,10, 10,10);
    rect(30,30, 10,10);
    rect(30,70, 10,10);
    rect(30,90, 10,10);
    rect(30,130, 10,10);
    rect(30,150, 10,10);
    rect(30,170, 10,10);
    pop();
  }
}