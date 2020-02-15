function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height - 10, x + random(-10, 10), height - 10 - random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height - 10);
    h = 10;
  }



  if (random(h) > 10) {
    fill('red')
    circle(20, 180, 8)
    circle(24, 176, 8)
    circle(29, 180, 8)
    circle(22, 185, 7)
    circle(27, 185, 7)
  }

  if (random(h) > 25) {
    fill('red')
    circle(180, 160, 8)
    circle(184, 156, 8)
    circle(189, 160, 8)
    circle(182, 165, 7)
    circle(187, 165, 7)
  }

  if (random(h) > 60) {
    fill('red')
    circle(70, 140, 8)
    circle(74, 136, 8)
    circle(79, 140, 8)
    circle(72, 145, 7)
    circle(77, 145, 7)
  }

  if (random(h) > 100) {
    fill('red')
    circle(320, 100, 8)
    circle(324, 96, 8)
    circle(329, 100, 8)
    circle(322, 105, 7)
    circle(327, 105, 7)
  }


  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
