var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car =createSprite(500,400,80,80);
  car.shapeColor="yellow";
  wall=createSprite(900,400,10,50);
  wall.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  car.velocityX=4;
  if(bounceOff(car, wall)){ 
    car.shapeColor = "blue";
    
    wall.shapeColor = "blue"; 
  } 
    
    else { car.shapeColor = "yellow";
     wall.shapeColor = "orange";
     }
      drawSprites(); 
    
    } 
   