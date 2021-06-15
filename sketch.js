var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,680,800,40);
	dustbin1=new Dustbin(540,630,25,75);
	dustbin2=new Dustbin(680,630,25,75);
	dustbin3=new Dustbin(610,650,140,20);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	
		ball=Bodies.circle(200,20,30,ball_options);
		World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  fill ("magenta");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
  ground.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
	
}



