let img;
let ipAddress;

function preload() {

  img = loadImage('heatmap.png');
  img1 = loadImage('hilbert.png');
  img2 = loadImage('number.jpg');
  img3 = loadImage('mom.png');
  img4 = loadImage('sis.png');
  img5 = loadImage('bro.png');
  
  
  
  
  
  ipAddress = loadTable("ip.csv", "csv", "header");
  print(ipAddress.getRowCount() + " rows");
}

function setup() {
  createCanvas(800, 800);

  image(img2, 0, 0, 800, 800);
  //image(img, 0, 0, 800, 800);
  //blendMode(REPLACE);
   
  //blendMode(DARKEST);
  image(img3, 350, 400, 50, 50);
  image(img4, 300, 300, 50, 50);
  image(img5, 300, 200, 50, 50);
  
  

    
    
  let my_ip = "192.175.48.0/24";
  print("My IP is " + my_ip);

  for (let row = 0; row < ipAddress.getRowCount(); row++) {
    let ip_number = ipToNumber(ipAddress.getString(row, 0));
    print("Turned into a number that's " + ip_number);

    // this calculates the position using a 4096x4096 hilbert curve
    let ip_coords = d2xy(4096, ip_number / 256);
    print(ip_coords);


    // and draws a circle
    // seems to match this one: https://bl.ocks.org/vasturiano/8aceecba58f115c81853879a691fd94f
    //background(204);
    fill("red");
    noStroke();
    circle(ip_coords.x / 10, ip_coords.y / 10, 10);
  }
}

function draw() {
  
    image(img2, 0, 0, 800, 800);
  //image(img, 0, 0, 800, 800);
  //blendMode(REPLACE);
   
  //blendMode(DARKEST);
  image(img3, 350, 400, 50, 50);
  image(img4, 300, 300, 50, 50);
  image(img5, 300, 200, 50, 50);

   if (mouseIsPressed) {
    image(img1, 0, 0, 800, 800);
   }
    
}


// the code below was found and converted to JavaScript from:
// https://en.wikipedia.org/wiki/Hilbert_curve#Applications_and_mapping_algorithms

// convert d to (x,y)
function d2xy(n, d) {
  let rx;
  let ry;
  let t = d;
  let coords = {
    x: 0,
    y: 0
  };

  for (let s = 1; s < n; s *= 2) {
    rx = 1 & (t / 2);
    ry = 1 & (t ^ rx);
    rot(s, coords, rx, ry);
    coords.x += s * rx;
    coords.y += s * ry;
    t /= 4;
  }

  return coords;
}

// rotate/flip a quadrant appropriately
function rot(n, coords, rx, ry) {
  if (ry == 0) {
    if (rx == 1) {
      coords.x = n - 1 - coords.x;
      coords.y = n - 1 - coords.y;
    }

    // swap x and y
    let t = coords.x;
    coords.x = coords.y;
    coords.y = coords.x;
  }
}

function ipToNumber(ip) {
  let segments = split(ip, ".");
  segments[0] = parseInt(segments[0]);
  segments[1] = parseInt(segments[1]);
  segments[2] = parseInt(segments[2]);
  segments[3] = parseInt(segments[3]);
  return segments[3] + (segments[2] * 256) + (segments[1] * 65536) + (segments[0] * 16777216);
}
  

  
  
  

