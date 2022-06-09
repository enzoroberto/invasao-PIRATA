const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;
var backgroundImg;
var tower, towerImg;
var cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
    
  var options = {
    isStatic: true
  }
  
  cannon = new Cannon(180, 110, 130, 100, 20)

  ground = Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
}

function draw() {
  image(backgroundImg, 0,0, 1200, 600);

  Engine.update(engine);
  cannon.display ();
  
  push();
    imageMode(CENTER);
    image(towerImg,tower.position.x, tower.position.y, 160,310);
  pop();
   
}
