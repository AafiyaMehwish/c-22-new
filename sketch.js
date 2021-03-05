const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var groundOption = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,groundOption);
  World.add(myWorld,ground);
  var ballOption ={
    restitution:1
  }

  ball = Bodies.circle(200,100,20,ballOption);
  World.add(myWorld,ball);

  console.log(ground);
  console.log(ground.position.x);
}

function draw() {
  background(255,255,255);
  Engine.update(myEngine);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}
