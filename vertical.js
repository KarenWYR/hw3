var ballY = 0;
var ballSpeed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(10,20,100 );
  
  ellipse(200, ballY, 50);

  ballY = ballY + ballSpeed;
  
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }
}
