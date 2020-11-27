function Amanda(initx, inity) {
  this.x = initx;
  this.y = inity;
  // GH: modified
  this.width=0;
  this.width2=100;
  this.floors = random(1, 250);
  this.collapsing = false;

  this.draw = function() {
    push();
    translate(this.x, this.y);
    
    // GH: added
    scale(0.3, 0.3);
    noStroke();
   fill(219,112,147);
   quad(this.width,70,this.width,-1*this.floors-50,50,-1*this.floors,50,100);
    fill(255,182,193)
    quad(50, -1 * this.floors, 50, 100, this.width2, 70, this.width2, -1 * this.floors - 50);
   fill(255,192,203);
    quad(this.width2, -1 * this.floors - 50, 50, -1 * this.floors, this.width, -1 * this.floors - 50, 50, -1 * this.floors - 100);

    pop();

    if (this.collapsing == true) {
      if (this.floors > -99) {
        this.floors = this.floors -1;
        this.width=(this.width=25);
        this.width2=(this.width2=75);

      }
    }
  }

  this.collapse = function() {
    this.collapsing = true;
  }
}