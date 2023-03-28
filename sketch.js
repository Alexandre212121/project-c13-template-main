var garden, rabbit;
var gardenImg, rabbitImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  greenImg = loadImage("leaf.png")
}

function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  
  var selectSprites = Math. round(random(1,4))

  if(frameCount % 80 == 0) {
    if(selectSprites == 1) {
      genOrange()
    }

    else if(selectSprites == 2) {
      genApples()
    }

    else if(selectSprites == 3) {
      genGreen()
    }

    else{
      genRed()
    }

  }
  
  
 
  
  

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  drawSprites();

}


function genApples() {
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.addImage(appleImg)
  apple.scale = 0.05
  apple.velocityY = 3
  apple.lifetime = 150
}

function genOrange() {
  orangeL = createSprite(random(50, 350), 40, 10, 10)
  orangeL.addImage(orangeImg)
  orangeL.scale = 0.06
  orangeL.velocityY = 3
  orangeL.lifetime = 150
}
function genGreen() {
  greenL = createSprite(random(50, 350), 40, 10, 10)
  greenL.addImage(greenImg)
  greenL.scale = 0.06
  greenL.velocityY = 3
  greenL.lifetime = 150
}
function genRed() {
  redL = createSprite(random(50, 350), 40, 10, 10)
  redL.addImage(redImg)
  redL.scale = 0.04
  redL.velocityY = 3
  redL.lifetime = 150
}