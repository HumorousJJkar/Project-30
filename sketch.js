const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Ground1, Stand1, Stand2, canvas, polygonimage;

function preload() {

 polygonimage = loadImage("Polygon_img.png");


}

function setup() {
  var canvas = createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

  Ground1 = new Ground(750,height,1500,20);
  Stand1 = new Ground(800,500,260,20);
  Stand2 = new Ground(1200,350,200,20);
  box1 = new Box(790,450,30,50);
  box2 = new Box(820,450,30,50);
  box3 = new Box(850,450,30,50);
  box4 = new Box(790,420,30,50);
  box5 = new Box(820,390,30,50);
  box6 = new Box(790,390,30,50);
  box7 = new Box(820,420,30,50);


  box8 = new Box(1200,340,30,50);
  box9 = new Box(1230,340,30,50);
  box10 = new Box(1260,300,30,50);
  box11 = new Box(1170,270,30,50);
  box12 = new Box(1170,340,30,50);
  box13 = new Box(1140,300,30,50);
  box14 = new Box(1200,270,30,50);
  box15 = new Box(1200,300,30,50);


  box16 = new Box(760,450,30,50);

  var options={
    restitution:0.8,
    density:0.4
  }

  polygon = Bodies.circle(50,200,20,options);
  
  World.add(world,polygon);
  
  slingShot = new SlingShot(polygon,{x:200,y:200});

  
  
 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  Ground1.display();
  Stand1.display();
  Stand2.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  imageMode(CENTER)
  image(polygonimage, polygon.position.x, polygon.position.y, 40, 40);
  drawSprites();
}

function mouseDragged(){
  
 Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon);

  }

}