function TieFighter(initX, initY) {
  this.x = initX-35;
  this.y = initY-50;
  this.speed = random(1, 2);

  this.draw = function() {
    push();
    translate(this.x, this.y);
    scale(0.1, 0.1);
    fill("grey");
    quad(400, 300, 400, 450, 500, 500, 500, 350);
    quad(200, 300, 200, 450, 300, 500, 300, 350);
    ellipse(350, 400, 100, 100)
    fill(0)
    ellipse(360, 410, 50, 55)
    pop();

    // GH: added
    this.x = this.x + this.speed * 0.6;
    this.y = this.y + this.speed * 0.35;

    if (this.x > width) {
      this.x = this.x - width + 100;
    }
    if (this.y > height) {
      this.y = this.y - height;
    }
  }
}