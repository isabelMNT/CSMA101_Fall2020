function Bus(initX, initY) {
  this.x = initX + 200;
  this.y = initY + 30;
  this.speed = random(2, 2);

  this.draw = function() {
    push();
    translate(this.x, this.y);
    scale(0.05, 0.05);
    fill("yellow");
    quad(500, 300, 500, 450, 600, 500, 600, 350);
    quad(300, 500, 600, 500, 600, 350, 300, 350);
    quad(200, 300, 500, 300, 600, 350, 300, 350);
    quad(200, 300, 200, 450, 300, 500, 300, 350);
    fill(0)
    ellipse(360, 500, 45, 45);
    ellipse(530, 500, 45, 45);
    pop();

    this.x = this.x - this.speed * 1.2;
    this.y = this.y + this.speed * 0.5;

    if (this.x < -400) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = this.y - height;
    }
  }
}