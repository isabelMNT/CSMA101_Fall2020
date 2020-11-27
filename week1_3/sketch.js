var angle = 0;
var centerX = 200;
var centerY = 200;




function setup() {
  createCanvas(800, 800);
  

}

function draw() {
  
     if (mouseY < 400) {
    fill('gray');  
  
  } else {            
    fill('pink');   
  }
  
  
  
  
  if (mouseIsPressed) { 
  
  if (mouseX < 400) {
    
 
  var size;                                
  size = random (2,50) + 2;    
 
  stroke(100, 100, 240);
          fill(100,5, frameCount % 20) +100;
   rect(mouseX, mouseY, size,size);
    
    

        } else {                           
 

  
  
  var size;                                
  size = random (0,100) + 5;
          noFill();
  stroke(5,0, frameCount % 300) +5;
        
 ellipse(mouseX, mouseY, size,size);
          
          
    
        }
  }
  }