const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
 var landimg;
 var playerbase;
 var landingimg;
 var player,playerimg;

function preload() {
  landimg = loadImage("./assets/base1.png");
  langingimg = loadImage("./assets/base2.png");
  playerimg = loadImage(".assetsplayer.png");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new computerBase(300,random(450,height-300),180,150);
   playerbase = new playerBase(1300,random(450,height-300),180,150);
   player = new Player(300,random(450,height300),180,150);
   


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerbase.display();
   player.display();


   //display Player and computerplayer


}
