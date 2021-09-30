const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher, computerArcher;
var arrow;
var move;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, 450, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(321,playerBase.body.position.y-180,75,100,-1.5);
  
  console.log(playerArcher.x);
  computerBase = new ComputerBase(
    width - 300,
    450,
    180,
    150
  );
  console.log(computerBase.y);
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 320,
    computerBase.body.position.y - 180,
    75,
    100,
    1.5
  );
  
  
  //Create an arrow Object
  arrow = new PlayerArrow(350,playerBase.body.position.y-177,50,10,0.07);
  arrow.angle = playerArcher.angle+1.47;
  console.log(arrow.angle);
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  

  
  playerArcher.display();
  playerBase.display();
  player.display();
  computerBase.display();
  computer.display();
  computerArcher.display()  



  //Display arrow();
  arrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode == 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArcher.body.angle);
    
  }
}



