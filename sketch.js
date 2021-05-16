var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


    box1=createSprite(width/2,height-50,200,20);
	box1.shapeColor="red";
	box2=createSprite(510,610,20,100);
	box2.shapeColor=color(255,0,0);
	box3=createSprite(310,610,20,100);
	box3.shapeColor="red";
	
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3)









	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

   packageSprite.collide(box1);
   packageSprite.collide(box2);
   packageSprite.collide(box3);



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
  }
}



