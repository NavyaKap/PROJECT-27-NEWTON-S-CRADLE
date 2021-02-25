
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine;
var world;

var roofObject;
var bob1,bob2,bob3,bob4,bob5;
var rope1, rope2, rope3, rope4, rope5;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	roofObject    = new Roof();
	
    bob1        = new Bob(150,300,40);
	  bob2        = new Bob(190,300,40);
	  bob3        = new Bob(230,300,40);
    bob4        = new Bob(270,300,40);
	  bob5        = new Bob(310,300,40);

	  rope1       = new Rope(bob1.body,roofObject.body,-40*2,0);
    rope2       = new Rope(bob2.body,roofObject.body,-40*1,0);
    rope3       = new Rope(bob3.body,roofObject.body,0,0);
	  rope4       = new Rope(bob4.body,roofObject.body,40,0);
	  rope5       = new Rope(bob5.body,roofObject.body,40*2,0);
}

function draw() {

  background("purple");
  Engine.update(engine);
  textSize(35)
  text("Newtons's Cradle", 120,70);
  textSize(20)
  text("Press Up Arrow to move the pendulum", 100,350);

  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
	
}


function keyPressed(){
   if(keyCode===UP_ARROW){

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   }
}
 



