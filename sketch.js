
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(900,100,30);
	mango4=new mango(800,100,30);
	mango5=new mango(700,100,30);

    stone1=new stone(500,500);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	Chain = new chain(stone.body,{x : 200, y : 100});





	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  Chain.display();    


  stone1.display();

  groundObject.display();
}

