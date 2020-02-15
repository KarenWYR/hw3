var ballX = 0;
var ballSpeed = 3;

var ballX2 = 0;
var ballSpeed2 = 5;

var ballY3 = 0;
var ballSpeed3 = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(ballX, 100, 50);
  ellipse(ballX2, 200, 50);
  ellipse(200, ballY3,50);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3
  
  // bounce the first ball
  if (ballX > width) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballX == 0) {
    ballSpeed = -ballSpeed;
  }
  
  // bounce the second ball
  if (ballX2 > width) {
    ballSpeed2 = -ballSpeed2;
  } 
  
  if (ballX2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
  
  // bounce the third ball
  if (ballY3 > height) {
    ballSpeed3 = -ballSpeed3;
  }

  if (ballY3 == 0) {
    ballSpeed3 = -ballSpeed3;
}  
}
