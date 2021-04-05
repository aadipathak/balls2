
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject,Ground,bottomBin,leftBin,rightBin;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobject = new paper(155,300,7);
	Ground = new ground(400,680,800,10)
	bottomBin = new dustbin(400,700,100,10)
	leftBin = new dustbin(400,700,100,10)
	rightBin = new dustbin(700,400,60,60)



	Engine.run(engine);
  
}


function draw() {
 
  background("lightblue");
  paperobject.display();
  Ground.display();
  leftBin.display();
  rightBin.display();
  bottomBin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paperobject.body,paperobject.body.positon,{x:155,y:-145})
	}
}



