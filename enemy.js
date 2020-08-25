var enemy;
var enemyVelocity;
var enemySize;

function updateEnemy() {
    touch = false;
    for (var i = 0; i < enemy.length; i++) {
        push();

        if (dist(enemy[i].x,enemy[i].y, p.x, p.y) <enemySize / 2) {
            touch = true;
            console.log(touch);
        }
        enemy[i].add(enemyVelocity[i]);

        if (enemy[i].x > width + enemySize / 2) {
            enemy[i].x = 0
        }
        if (enemy[i].x < -enemySize / 2) {
            enemy[i].x = 400
        }
        if (enemy[i].y > height + enemySize / 2) {
            enemy[i].y = 0
        }
        if (enemy[i].y < -enemySize / 2) {
            enemy[i].y = 400
        }

        fill(0, 225, 0, 45)
        stroke(255);
        ellipse(enemy[i].x, enemy[i].y, enemySize);
        pop();
    }
    if (touch == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }

}