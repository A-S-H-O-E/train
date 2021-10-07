const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;

function preload() {
  bg = loadImage("images/bg.jpg");
}
function setup() {
  createCanvas(1200, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(600, 370, 1200, 10);
  rock = new Rock(1000, 350, 200, 200);
  boggie1 = new Boggie(100, 350, 100, 50);
  boggie2 = new Boggie(230, 350, 100, 50);
  boggie3 = new Boggie(360, 350, 100, 50);
  boggie4 = new Boggie(490, 350, 100, 50);
  boggie5 = new Boggie(620, 350, 100, 50);
  connect1 = new Chain(boggie1.body, boggie2.body);
  connect2 = new Chain(boggie3.body, boggie4.body);
  connect3 = new Chain(boggie4.body, boggie5.body);
  connect4 = new Chain(boggie2.body, boggie3.body);
}

function draw() {
  background(bg);
  Engine.update(myEngine);
  rock.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  connect1.show();
  connect2.show();
  connect3.show();
  connect4.show()

  if(keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(boggie5.body,boggie5.body.position,{
      x: 1,
      y: -10
    })
  }
}
