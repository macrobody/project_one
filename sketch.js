function setup() {
  createCanvas(240, 320);
  red = 0;
  green = 255;
  blue = 0;
}

function draw() {
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Body
  fill(255, 0, 0);
  rect(120, 160, 20, 100);

  // Head
  fill(red, green, blue);
  ellipse(120, 115, 60, 60);

  // Eyes
  fill(255);
  ellipse(105, 115, 16, 32);
  ellipse(135, 115, 16, 32);

  // Pupils
  fill(0);
  var XPlus = mouseX / 20;
  if (XPlus > 12) {
    XPlus = 12;
  }
  var YPlus = mouseY / 15;
  if (YPlus > 22) {
    YPlus = 22;
  }
  var Xas = 99 + XPlus;
  var Yas = 104 + YPlus;
  ellipse(Xas, Yas, 7, 7);
  Xas = 129 + XPlus;
  Yas = 104 + YPlus;
  ellipse(Xas, Yas, 7, 7);

  // Legs
  line(110, 210, 100, 220);
  line(130, 210, 140, 220);
}

function mousePressed() {
  if (red === 0 && green === 255 && blue === 0) {
    green = 0;
    blue = 255;
  } else {
    if (red === 0 && green === 0 && blue === 255) {
      blue = 0;
      red = 255;
    } else {
      if (red === 255 && green === 0 && blue === 0) {
        red = 0;
        green = 255;
      }
    }
  }
}