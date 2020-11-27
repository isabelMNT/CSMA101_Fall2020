var bldgs = [];  // placed buildings
var earthquake = false;  // whether there is one
var hours = 12;  // time of day (0-23)
var sel = "Amanda";  // currently selected prototype
var prototypes = ["Amanda", "Bus", "Christoph", "Jeffrey", "Mitchell", "Pooja", "Light", "Person", "TieFighter", "Tree"];  // types of buildings

function setup() {
  createCanvas(600, 400);
}

function mouseClicked() {
  if (mouseX < 100) {
    // clicked on UI
    for (var i=0; i < prototypes.length; i=i+1) {
      if (mouseY > 10+i*26 && mouseY < 30+i*26) {
        sel = prototypes[i];  // change selected type of building
      }
    }
    if (mouseY > 370 && mouseY < 384) {
      earthquake = true;  // trigger earthquake
    }
  } else {
    // clicked on board, add building
    var bldg;
    bldg = new this[sel](mouseX, mouseY);

    // this is a trick I am using, but equivalent to:
    // if (sel == "Christoph") {
    //   bldg = new Christoph(mouseX, mouseY);
    // } else if (sel == "Mitchell") {
    //  bldg = new Mitchell(mouseX, mouseY);
    // } ...

    bldgs.push(bldg);
  }
}

function draw() {
  background(0);

  // draw UI
  for (var i=0; i < prototypes.length; i=i+1) {
    if (prototypes[i] == sel) {
      fill(248, 248, 40);  // selected
    } else {
      fill(255);           // deselected
    }
    rect(10, 10+i*26, 80, 20, 5);
    fill(0);
    text(prototypes[i], 14, 24+i*26);
  }
  fill(255);
  rect(10, 370, 80, 20, 5);
  fill(0);
  text("Earthquake", 14, 384);

  // simulate earthquake
  if (earthquake) {
    translate(random(-10, 10), 0);
    var dice = random(0, 1);
    if (dice > 0.96 && bldgs.length > 0) {  // 8% prob.: destroy bldg
      var whichOne = floor(random(0, bldgs.length));

      if (bldgs[whichOne].collapse != undefined) {
        bldgs[whichOne].collapse();
      } else {
        bldgs.splice(whichOne, 1);  // this removes an entry from the array
      }
    }
    if (dice > 0.98) {  // 2% prob.: stop
      earthquake = false;
    }
  }
  
  // draw board
  fill(127, 127, 127);
  quad(100, 200+5, 350, 56+5, 600, 200+5, 350, 400-56+5);
  fill(185, 215, 51);
  quad(100, 200, 350, 56, 600, 200, 350, 400-56);
  
  // draw buildings
  for (i=0; i < bldgs.length; i=i+1) {
    bldgs[i].draw();
  }

  // draw the night (black with transparency)
  fill(0, 0, 0, 192 * min(0.5 + cos(hours/24 * 2 * PI), 1));
  rect(100, 0, 500, 400);

  // draw the clock
  fill(255);
  text(floor(hours) + ":00", 550, 24);

  // make the clock advance
  hours = hours + 1/60;
  if (hours >= 24) {
    hours = hours - 24;
  }

  // give the buildings a chance to draw lights
  // (on top of the night)
  for (i=0; i < bldgs.length; i=i+1) {
    // you can use an if like so
    // to check if a method exists
    if (bldgs[i].lights != undefined) {
      bldgs[i].lights();
    }
  }
}