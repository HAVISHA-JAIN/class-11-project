var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200,400,20);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

//extra task 2
  if(sea.x<0){
    sea.x=200
  }
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  sea.velocityX = -3;
  //sea.velocityX = 3;
  
  //EXTRA TASK1 
  if(keyDown("right")){
    ship.velocityX=1

    }
    if(keyDown("LEFT")){
      ship.velocityX=-1
     
    }
    
  drawSprites();
  //extra task 3
edge= createEdgeSprites()
ship.bounceOff(edge[0])

ship.bounceOff(edge[1])
//ship.bounceOff(edge[2])
//ship.bounceOff(edge[3]) 

}
