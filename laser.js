lasers = [];
laserVelocity = [];


function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

        for (var z = 0; z < enemy.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, enemy[z].x, enemy[z].y) <enemySize / 2) {
                enemy[z] = createVector(random(0, width), random(0, height));
                enemyVelocity[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                Score++;
            }
        }
        lasers[i].add(laserVelocity[i]);

        push();
        stroke(255, 0, 0);

        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVelocity[i].x * 4, lasers[i].y + laserVelocity[i].y * 4)

        pop();
    }
}

function keyPressed() {
    //console.log (keyCode); 
    if (keyCode == 32) {
        laserSound.play();
        lasers.push(createVector(p.x, p.y));
        laserVelocity.push(p5.Vector.fromAngle(radians(heading)).mult(7));


    }
}