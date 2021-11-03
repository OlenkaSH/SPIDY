let playerImage;
let playerX = 100;
let flyImage;
let fly = 200;
let speed = 3;
let backgroundImage;
let spidernet1 = 150;



function preload() {
  
  playerImage = loadImage('spidy.png')
  flyImage = loadImage('fly.png')
  backgroundImage = loadImage('2.png')

}

function setup() {

  console.log('setup')
  createCanvas(1000, 800);
  

}
//let fly = 50
//let speed = 3

function draw() {
  clear()
  console.log('draw')

  //render the player image (x,y,width,height)

  image(playerImage, playerX, 20, 0, 0)
  image(flyImage, fly, 90, 0, 0)
  image(backgroundImage, spidernet1, 50, 450, 350)


  fly += speed
}

