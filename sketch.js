var bullet1, bullet2, bullet3, bullet4, bulletImage1 , bulletImage2 , bulletImage3 , bulletImage4, wall1, wall2, wall3, wall4;
var speed, weight, thickness;

function preload(){
  bulletImage1 = loadImage("bullet1.png");
  bulletImage2 = loadImage("bullet1.png");
  bulletImage3 = loadImage("bullet1.png");
  bulletImage4 = loadImage("bullet1.png");
}

function setup() {
  createCanvas(1600,700);

  thickness1 = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);

  bullet1 = createSprite(50, 160, 100, 25);
  bullet1.shapeColor = color(225,225,225);
  bullet1.addImage(bulletImage1);
  bullet1.scale = 0.3;
  wall1 = createSprite(1500,160,thickness1, 100);
  wall1.shapeColor = color(80,80,80);

  bullet2 = createSprite(50, 320, 100, 25);
  bullet2.shapeColor = color(225,225,225);
  bullet2.addImage(bulletImage2);
  bullet2.scale = 0.3;
  wall2 = createSprite(1500,320, thickness2, 100);
  wall2.shapeColor = color(80,80,80);

  bullet3 = createSprite(50, 480, 100, 25);
  bullet3.shapeColor = color(225,225,225);
  bullet3.addImage(bulletImage3);
  bullet3.scale = 0.3;
  wall3 = createSprite(1500,480,thickness3, 100);
  wall3.shapeColor = color(80,80,80);

  bullet4 = createSprite(50, 640, 100, 25);
  bullet4.shapeColor = color(225,225,225);
  bullet4.addImage(bulletImage4);
  bullet4.scale = 0.3;
  wall4 = createSprite(1500,640,thickness4, 100);
  wall4.shapeColor = color(80,80,80);

  speed1 = random(56,80);
  speed2 = random(56,80);
  speed3 = random(56,80);
  speed4 = random(56,80);
  weight = random(30,52);



  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;

  wall1.debug = true;
  wall2.debug = true;
  wall3.debug = true;
  wall4.debug = true;

  bullet1.debug = true;
  bullet2.debug = true;
  bullet3.debug = true;
  bullet4.debug = true;
}

function draw() {
  background(0,128,128);  
  if(bullet1.collide(wall1)){
    bullet1.velocityX = 0;
    //bullet1.x = 1400;
    var damage1 = 0.5 * weight * (speed1 * 4) * (speed1 * 4) /(thickness1 * thickness1 * thickness1);

    if(damage1 > 10) {
      wall1.shapeColor = color(255,0,0);
    }

    if(damage1 < 10){
      wall1.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet2, wall2)){
    bullet2.velocityX = 0;
    //bullet2.x = 1400;
    var damage2 = 0.5 * weight * (speed2 * 4) * (speed2 * 4)/(thickness2 * thickness2 * thickness2);

    if(damage2 > 10) {
      wall2.shapeColor = color(255,0,0);
    }

    if(damage2 < 10){
      wall2.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet3, wall3)){
    bullet3.velocityX = 0;
    //bullet3.x = 1400;
    var damage3 = 0.5 * weight * (speed3 * 4) * (speed3* 4)/(thickness3 * thickness3 * thickness3);

    if(damage3 > 10) {
      wall3.shapeColor = color(255,0,0);
    }

    if(damage3 < 10){
      wall3.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet4, wall4)){
    bullet4.velocityX = 0;
    //bullet4.x = 1400;
    var damage4 = 0.5 * weight * (speed4 * 4) * (speed4 * 4) /(thickness4 * thickness4 * thickness4);

    if(damage4 > 10) {
      wall4.shapeColor = color(255,0,0);
    }

    if(damage4 < 10){
      wall4.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}