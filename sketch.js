const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

function setup(){
  createCanvas(800,900);

  engine = Engine.create();
  world = engine.world;

  rect1 = new Rectangle(95,50);
  rect2 = new Rectangle(165,50);
  rect3 = new Rectangle(235,50);
  rect4 = new Rectangle(260,50);
  rect5 = new Rectangle(385,50);
  rect6 = new Rectangle(445,50);
  rect7 = new Rectangle(515,50);
  rect8 = new Rectangle(585,50);
  rect9 = new Rectangle(655,50);
  rect10 = new Rectangle(725,50);

  rect11 = new Rectangle(90,50);
  rect12 = new Rectangle(90,50);
  rect13 = new Rectangle(90,50);
  rect14 = new Rectangle(90,50);
  rect15 = new Rectangle(90,50);
  rect16 = new Rectangle(90,50);
  rect17 = new Rectangle(90,50);
  rect18 = new Rectangle(90,50);
  rect19 = new Rectangle(90,50);
  rect20 = new Rectangle(90,50);

}

function draw(){
    Engine.update(engine);

    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();

    drawSprites();
}