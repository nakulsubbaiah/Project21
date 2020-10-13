var bullet
var wall, thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90,321);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200, 200, thickness, 200);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  if(isTouching(bullet,wall)) {
  var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
    if(damage>11){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<11){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
function isTouching(ob1,ob2){
  if(ob2.x-ob1.x<ob2.width/2+ob1.width/2){
    bullet.velocityX=0;
  {
 return true
}
  }
{
return false
}
}
