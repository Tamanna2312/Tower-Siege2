const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot , bg;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png")
  bg=loadImage("3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(420,320,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(330,295,30,40);
  console.log(block1);
  block2 = new Block(360,295,30,40);
  block3 = new Block(390,295,30,40);
  block4 = new Block(420,295,30,40);
  block5 = new Block(450,295,30,40);
  block6 = new Block(480,295,30,40);
  block7 = new Block(510,295,30,40);
  //level two
  block8 = new Block(360,255,30,40);
  block9 = new Block(390,255,30,40);
  block10 = new Block(420,255,30,40);
  block11 = new Block(450,255,30,40);
  block12 = new Block(480,255,30,40);
  //level three
  block13 = new Block(390,215,30,40);
  block14 = new Block(420,215,30,40);
  block15 = new Block(450,215,30,40);
  //top
  block16 = new Block(420,175,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(this.ball,{x:100,y:200});
  

}
function draw() {
  background(bg); 
 
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke("cyan");
  fill("grey");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
    
  }
}
