let playerImage;
let playerX = 100;
let flyImage;
let fly = 200;

function preload() {
  playerImage = loadImage('spidy.png')
  flyImage = loadImage('fly.png')

}

function setup() {

  console.log('setup')
  createCanvas(600, 400);
  

}


function draw() {
  //clear()
  console.log('draw')

  //render the player image (x,y,width,height)

  image(playerImage, playerX, 20, 0, 0)
  image(flyImage, fly, 90, 0, 0)

}