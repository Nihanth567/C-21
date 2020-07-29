var fixedRect,movingRect,box1,box2;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(400,200,60,60);
  movingRect.shapeColor = "red";

  box1 = createSprite(680,30,45,45);
  box1.debug = true;
  box1.shapeColor = "green";
  box1.velocityY = 3;

  box2 = createSprite(680,575,45,45);
  box2.debug = true;
  box2.shapeColor = "green";
  box2.velocityY = -3;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.width/2 + movingRect.width/2> fixedRect.x - movingRect.x&&
    fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x&&
    fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y&&
    fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y){
      fixedRect.shapeColor = "yellow";
      movingRect.shapeColor = "yellow";
    }
    else{
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }

    if(box1.width/2 + box2.width/2> box1.x - box2.x&&
      box1.width/2 + box2.width/2>box2.x - box1.x){

        box1.velocityX = box1.velocityX*(-1);
        box2.velocityX = box2.velocityX*(-1);


      }

      if(box1.height/2 + box2.height/2> box1.y - box2.y&&
        box1.height/2 + box2.height/2> box2.y - box1.y){

          box1.velocityY = box1.velocityY*(1);
          box2.velocityY = box2.velocityY*(1);
        }
  drawSprites();
}