var bullet;
var wall;
var speed,weight; 
var deformation;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 20);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  wall.shapeColor = color("grey");
  bullet.shapeColor = color(255);
  wall.shapeColor = color(80,80,80);
  

}

function draw() {
  background("black");  
  drawSprites();
  bullet.collide(wall);
  

  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
   
    var damage = ((0.5*weight*speed*speed)/thickness*thickness*thickness);
    console.log(damage);

    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
 

  
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}