var boy, stone;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

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

	mango1 = new Mango(570,100,40,40);
	mango2 = new Mango(675,80,40,40);
	mango3 = new Mango(770,170,40,40);
	mango4 = new Mango(650,167,40,40);
	mango5 = new Mango(520,180,40,40);

	tree = new Tree();
	stone = new Stone(100,10,20,20);
	string = new String(stone.body, {x:245, y:375});
	ground = new Ground(450,490,900,20);
}


function draw() {
  rectMode(CENTER);
Engine.update(engine);

  background("yellow");


  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  string.display();
  stone.display();

  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	string.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}




