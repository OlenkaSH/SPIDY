class Game {
  constructor() {
    this.player = new this.player()

  }
  preload() {
    this.player.image = loadImage('spidy.png')
  }
  draw() {
    clear()
    this.player.draw()
  }
}

class Player {

  constructor() {
    this.x = 500;
    this.y = 500;
    this.width = 100;
    this.height = 100;
    this.image;

  }
draw() {
  image(this.image, this.x, this.y, this.width, this.height)
}
moveRight() {
  this.x += 5
}
moveLeft() {
  this.x -= 5
}
moveUp() {
  this.y -= 5
}
moveDown() {
  this.y += 5
}

}

const game = new Game()


function preload() {
  game.preload()
  
}

function setup() {

  createCanvas(800, 400);
  game.setup();
  

}

function draw() {
  game.draw()
}

function keyPressed() {
  

if (keyCode === 39) {
  game.player.moveRight();

}

if (keyCode === 37) {
  game.player.moveLeft();

}
if (keyCode === 38) {
  game.player.moveUp();

}
if (keyCode === 40) {
  game.player.moveDown();

}
}