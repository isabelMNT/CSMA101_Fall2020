function Mitchell(initX, initY) {
  this.x = initX;
  this.y = initY;
  // GH: modified
  this.width = 100;
  this.height = random(100, 350);

  this.draw = function() {
    // all the drawing goes here
    push();
    translate(this.x, this.y);

    // GH: added
    scale(0.2, 0.2);

    //shearY(radians(30));
    //fill("grey");
    //rect(0, 0, -this.width, -this.height);
    //shearY(radians(-30));

    shearY(radians(-30));
    fill("grey");
    rect(0, 0, this.width, -this.height);
    fill("brown");
    rect(10, 0, 10, -15);
    for (var x = 30; x < this.width - 5; x = x + 20) {
      for (var y = 0; y < this.height - 5; y = y + 20) {
        fill("yellow");
        rect(x, -y - 5, 5, -5);

      }

    }
    strokeWeight(4);
    point(18, -8);

    pop();
  }




  this.collapse = function() {



  }
}