const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17;
var ground;
var chain;
var polygon;

function setup() {
  
  engine=Engine.create();
  world= engine.world;
  createCanvas(1400,700);

  polygon=new Polygon(160,50);

  box1=new Box(300,275);
  box3=new Box(330,275);
  box4=new Box(360,275);
  box5=new Box(390,275);
  box6=new Box(420,275);
  box7=new Box(450,275);
  box8=new Box(480,275);

  box9=new Box(330,235);
  box10=new Box(360,235);
  box11=new Box(390,235);
  box12=new Box(420,235);
  box13=new Box(450,235);

  box14=new Box(360,195);
  box15=new Box(390,195);
  box16=new Box(420,195);

  box17=new Box(390,155);

  ground=new Ground(380,310,320,30);

  chain = new SlingShot(polygon.body,{x:175, y:50});

  }

function draw() {
  Engine.update(engine);
  background(0); 
  
  ground.display();

  box1.display();
  //box2.display();
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
  box17.display();

  chain.display(); 

  polygon.display(); 

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();

}
function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x:350,y:535})
		chain.attach(polygon.body);
	}
}

