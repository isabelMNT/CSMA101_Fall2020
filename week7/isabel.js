function Tree(initx, inity) {
  this.x = initx;
  this.y = inity;
  // GH: modified
  this.floors = random(1, 250);
  this.collapsing = false;

  this.draw = function() {
    push();
    translate(this.x, this.y);

    // GH: added
    scale(0.5, 0.5);

    fill('brown');
    rect(1, 1, 10, 30);
    fill('green');
    ellipse(5, 1, 30, 30);

    pop();

    if (this.collapsing == true) {
      if (this.floors > -100) {
        this.floors = this.floors - 1;
      }
    }
  }

  this.collapse = function() {
    this.collapsing = true;
  }
}

function Person(initX, initY) {
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
    scale(0.05, 0.05);

    noStroke();
    fill('brown');
    //limbs and head
    rect(100, 250, 40, 98);
    rect(130, 250, 40, 98);
    rect(60, 152, 40, 98);
    rect(170, 152, 40, 98);
    rect(100, 88, 70, 70);
    fill('');
    rect(100, 152, 70, 98);
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