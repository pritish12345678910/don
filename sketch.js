
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin,paper;

function setup() {
	createCanvas(800, 400);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

dustbin = new DustBin(720,390,100,10);
paper = new paper(100,300,10);
ground = Bodies.rectangle(width / 2,400,width,10);
{
isStatic: true
}
world.add(world,ground);
}



function draw() {
background("black")
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position)

			X:12
            Y:-13
		}
	}


