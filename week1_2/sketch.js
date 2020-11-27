



function setup() {
  createCanvas(800, 800);
  

}

function draw() {
  
  
  if (mouseIsPressed) { 
  
  
  var size;                                
  size = random (0,50) + 10;              
  fill(280,0, frameCount % 120) +5;
 ellipse(mouseX, mouseY, size,size);
    
    
  
    
        } else {                           
 
  var size;                                
  size = random (2,50) + 2;    
 
  stroke(100, 100, 240);
          fill(100,5, frameCount % 20) +100;
   rect(mouseX, mouseY, size,size);
    
    
        }
  }