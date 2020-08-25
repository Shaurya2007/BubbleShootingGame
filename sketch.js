function setup() {
  createCanvas(400, 400);
  player = createVector(width / 2, height / 2)
  playerVelocity = createVector(0, 0);
  force = createVector(0, 0);
  size = 10;
  heading = 0;
  boostColor = color(0, 255, 0);
  playerColor = color(255);
  Score = 0;
  Health = 200;
  enemy = [];
  enemyVelocity = [];
  enemySize = 25;

  for (var i = 0; i < 5; i++) {
      enemy.push(createVector(random(0, width), random(0, height)));
      enemyVelocity.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
  }
}

function draw() {
  background('#ffffff');

  updatePlayer();
  updateEnemy();
  updateLasers();

}