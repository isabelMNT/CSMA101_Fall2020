var symbol;
var symbolSize = 15;
var fadeInterval = 1.6;
var streams = [];

function setup() {
   createCanvas(
      window.innerWidth, window.innerHeight);
   background(0);
   var x = 0;
   for (var i = 0; i <= width / symbolSize; i++) {
      stream = new Stream();
      stream.generateSymbols(x, random(-1500, 0));
      streams.push(stream);
      x += symbolSize;
   }
   textSize(symbolSize);
}

// two primary object types 
// symbols, characters (1) 
// streams of Symbols (2)

function draw() {
   background(0, random(100, 180));
   streams.forEach(function(stream) {
      stream.render();
   });
}

function Symbol(x, y, speed, first, opacity) {
   // x and y are positions of the characters 
   // we'll also need something to hold the x and y 
   this.x = x;
   this.y = y;
   this.speed = speed/2;
   this.value;
   this.switchInterval = round(random(2, 50));
   this.first = first;
   this.opacity = opacity;

   // this will set the value. 
   this.setToRandomSymbol = function() {
      if (frameCount % this.switchInterval == 0) {
         this.value = String.fromCharCode(
            0x30a0 + round(random(0, 96))
            // katakana starts 0x30a0 (unicode) and then 96 numbers.
         );
      }
   }


   this.rain = function() {
      // if (this.y >= height) {
      //    this.y = 0;
      // } else {
      //    this.y += this.speed;
      // }
      this.y = (this.y >= height) ? 0 : this.y += this.speed;
   }
}

function Stream() {
   this.symbols = [];
   this.totalSymbols = round(random(5, 20));
   this.speed = random(2, 15);

   this.generateSymbols = function(x, y) {
      var opacity = 255;
      var first = round(random(0, 4)) == 1;
      for (var i = 0; i <= this.totalSymbols; i++) {
         symbol = new Symbol(x, y, this.speed, first, opacity);
         symbol.setToRandomSymbol();
         this.symbols.push(symbol);
         opacity -= (255 / this.totalSymbols) / fadeInterval;
         y -= symbolSize;
         first = false;
      }
   }

   this.render = function() {
      this.symbols.forEach(function(symbol) {
         if (symbol.first) {
            fill(200, 255, 200, symbol.opacity);
         } else {
            fill(0, 255, 70, symbol.opacity);
         }

         text(symbol.value, symbol.x, symbol.y);
         symbol.rain();
         symbol.setToRandomSymbol();
      });
   }
}