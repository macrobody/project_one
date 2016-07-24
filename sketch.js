function setup() {
  createCanvas(480, 300);
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
  rect(240, 145, 20, 100);

  // Head
  fill(red, green, blue);
  ellipse(240, 115, 60, 60);

  // Eyes
  fill(255);
  ellipse(224, 115, 16, 32);
  ellipse(256, 115, 16, 32);

  // Pupils
  fill(0);
  var XPlus = mouseX / 60;
  if (XPlus > 8) {
    XPlus = 8;
  }
  var YPlus = mouseY / 30;
  if (YPlus > 22) {
    YPlus = 22;
  }
  var Xas = 220 + XPlus;
  var Yas = 104 + YPlus;
  ellipse(Xas, Yas, 7, 7);
  Xas = 252 + XPlus;
  Yas = 104 + YPlus;
  ellipse(Xas, Yas, 7, 7);

  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
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