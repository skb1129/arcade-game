var score = 0;
// Enemies our player must avoid
var Enemy = function() {
    var y = [60, 140, 230];
    this.x = Math.floor(Math.random() * 801) - 890;
    this.y = y[Math.floor(Math.random() * (y.length + 1))];
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 505) {
        this.x += (150 * dt);
    } else {
        this.x = -90;
    }

    // If the enemy and the player collide.
    if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
		window.location.reload();
		//player.reset();
        //score = 0;
        //document.getElementById('score').innerHTML = score;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Creation
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.reset();
};

//Player location update
Player.prototype.update = function(dt) {
    if (this.y < 40) {
        this.reset();
        score++;
        document.getElementById('score').innerHTML = score;
    }
};

// Draws Player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handles the movement inputs
Player.prototype.handleInput = function(key) {
    if (key == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (key == 'right' && this.x < 400) {
        this.x += 100;
    }
    if (key == 'up' && this.y > 3) {
        this.y -= 85;
    }
    if (key == 'down' && this.y < 380) {
        this.y += 85;
    }
};

// Resets the player location
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
};



var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var enemy5 = new Enemy();
var enemy6 = new Enemy();

allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
