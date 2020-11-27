function setup() {
  createCanvas(1000, 1000);
// createLoop({
    //  duration: 5,
    //  gif: 
   // {download: true
   // }});
  }





  function draw() {
    background('BLACK');
    pattern(0);
    pattern(frameCount / 1);
  }

  function pattern(angle) {
    push(); // make a copy of the current drawing "settings" (transformations etc)
    translate(200, 200); // step 1: move the coordinate origin
    rotate(radians(angle)); // step 2: rotate the coordinate grid
    for (var x = -800; x < 800; x = x + 50) {
      for (var y = -800; y < 800; y = y + 50) {
        fill(random(255), random(255), random(255));
        blendMode(HARD_LIGHT);
        square(x, y, 50);



      }

    }
    push(); // restore the drawing settings (so that changes between push and pop don't affect anything afterwards)
  }