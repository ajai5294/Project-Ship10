var ship1, sea;
var shipImg, seaImg;

function preload(){

  shipImg = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadImage ("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite (400, 200)
  sea.addImage (seaImg)

  ship1 = createSprite (130, 250, 20, 20)
  ship1.addAnimation ("movingShip", shipImg)

  ship1.scale = 0.1;

  sea.velocityX = -2
  sea.scale = 0.4

}

function draw() {

  if(sea.x < 0) {
    sea.x = sea.width/8;
  }
 
  drawSprites();
}