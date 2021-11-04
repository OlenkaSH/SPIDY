let playerImage;
let playerX = 100;
let playerY = 20;
let flyImage;
let fly = 20;
let speed = 2;
let backgroundImage;
let spidernet1 = 150;
let offset = Math.random() * 4 - 2;
let xDelta = 0;
let yDelta = 0;
let xRichtung = 1;
let yRichtung = -1;



function preload() {
  
  playerImage = loadImage('spidy.png')
  flyImage = loadImage('fly.png')
  backgroundImage = loadImage('2.png')

}


function setup() {

  console.log('setup')
  createCanvas(1000, 800);

 
  
}

/*function mouseClicked() {
  var index=int(random(10));
  image(imgs[index], mouseX, mouseY);
}*/


let x = 100

function draw() {
  clear()
  console.log('draw')

  image(playerImage, playerX, playerY, 0, 0)
  image(backgroundImage, spidernet1, 50, 450, 350)
  image(flyImage, fly, 90, 0, 0)


  fly += speed


  if (fly > 800) {
    //change fly's direction
    speed = - 3
  
  } if (fly < 10) {
    speed = + 3
  
  } fly = fly + random(-1, 5);
    fly = fly - 1;
  }

  
  //image(flyImage, fly, 90, 0, 0)

  /*if (xDelta > width) {
    xRichtung = -1;
  }
  if (xDelta < 0) {
    xRichtung = 1;
  }
  xDelta = xDelta + xRichtung;

  if (yDelta > height) {
    yRichtung = -1;
  }
  if (yDelta < 0) {
    yRichtung = 1;
  }
  yDelta = yDelta + yRichtung;

  //fly(xDelta, 120, 100,100);*/

  
  /*fly += speed

  if (fly > 945) {
    //change fly's direction
    speed = - 3
  
  } if (fly < 10) {
    speed = + 3
  
  } fly = fly + random(-1, 5);
    fly = fly - 1;*/



function keyPressed() {
  console.log(keyCode);
  //spidy moves to the right
  if (keyCode === 39) {
    playerX += 20;
  }
  //spidy moves to the left
  if (keyCode === 37) {
    playerX -= 20;
  }
  //spidy moves up
  if (keyCode === 40) {
     playerY += 20
  }
  //spidy moves down
  if (keyCode === 38) {
    playerY -= 20;
  }

}



