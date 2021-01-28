var boy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(900, 500);

	boy = createSprite(300,430, 20, 50);
	boy.addImage(boyimg);
	boy.scale=0.1;
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  stone = new Stone(100,370,20,20);
  stone.display();
  drawSprites();
 
}



