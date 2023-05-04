const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var ball;
function setup() {
  createCanvas(400,400);

 engine=Engine.create();
 
 
  world=engine.word1;

 var ball_options={
  restitution:0.95,
  frictionAir:0.01

 }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(red);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 
  
}

