function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
var lawnmowerX = 0

function draw() {
  strokeWeight(1)
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
    rect(0, 0, width, height - 15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height - 10, width, 10);

  fill('blue');
  rect(lawnmowerX, 165, 40, 20);
  fill('green');
  circle(lawnmowerX + 30, 185, 12);
  circle(lawnmowerX + 10, 185, 12);
  stroke('black');
  strokeWeight(3);
  line(lawnmowerX + 13, 170, lawnmowerX - 10, 150);

  if (random(h) < 20) {
    lawnmowerX = lawnmowerX + 5;
  }

  if (lawnmowerX - 10 > width) {
    lawnmowerX = 0
  }

}
