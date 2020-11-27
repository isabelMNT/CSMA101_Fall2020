var angle = 0;
var centerX = 100;
var centerY = 100;



function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
 //background('black');
  
  
  if (mouseIsPressed) { 
    

    
  angle = angle + radians(5/2);
 
  centerX = centerX + random(-2,5);       
  centerY = centerY + random(-3,10);       
  


  var x= centerX+sin(angle)*2;
  var y= centerY+cos(angle)*2;
    
  
      rotateX(frameCount * 40);
  rotateY(frameCount * 40);

     stroke(100,20, frameCount % 250) + 10;
    strokeWeight(1); 
    //fill(300,20, frameCount % 250) + 50;
    noFill();
   box(400);
    
    } else {
    
  rotateX(frameCount * 40);
  rotateY(frameCount * 40);

     stroke(5,20, frameCount % 250) + 10;
    strokeWeight(1); 
    //fill(300,20, frameCount % 250) + 50;
    noFill();
    ellipsoid(300, 50, 50)



}
}