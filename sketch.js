var bullet,thickness;
var speed, weight;
var wall
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50, 200,20,30);
  bullet.velocityX = speed;
  wall=createSprite(600,200,thickness,height/2);
 

  deformation=0.5 * weight * speed * speed/22500;
}

function draw() {
  background(255,255,255); 
  
  
  if((wall.x-bullet.x )<=(bullet.width+wall.width)/2)
  {

    //console.log(wall.x-car.x)
    
    //console.log((car.width+wall.width)/2);
    bullet.velocityX = 0
    //car.x = wall.x - wall.width/2
    
    //car.x = wall.x - (car.width+wall.width)/2
  
    //car.collide(wall)
    if(deformation>190)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100);
    {
      bullet.shapeColor=color(0,0,255);
 
    }
    if(deformation>100)
    {
      bullet.shapeColor=color(0,255,0);
    }
    bullet.x = wall.x - (wall.width/2 + bullet.width/2)
 
 
 function hascollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;

if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}

if(damage<10){

  wall.shapeColor=color(0,255,0)
}






}




















}
 
 
 
 
    drawSprites();
    noLoop()
    //drawSprites();
  }

 
 
 
 
 
 
 
  drawSprites();
}