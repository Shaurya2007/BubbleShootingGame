var player;
var size;
var heading;
var playerVelocity;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
  
    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        playerVelocity.add(force.mult(0.2));
        boostColor = color(0, 255, 0);
    }

    if (player.x > 400) {
        player.x = 0
    }
    if (player.x < 0) {
        player.x = 400
    }
    if (player.y > 400) {
        player.y = 0
    }
    if (player.y < 0) {
        player.y = 400
    }

    playerVelocity.mult(0.978);
    player.add(playerVelocity);

    push();
    translate(player.x, player.y);
    rotate(radians(heading));
  

    fill(boostColor)
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);
    //health


    fill(playerColor);
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();
    fill(255);
    text(Health, p.x - 10, p.y + 25)

    fill(255);
    text(Score, 25, 25);

}