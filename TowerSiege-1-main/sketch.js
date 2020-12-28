
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0 
function preload()
{
  lol()
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options={isStatic:true}
    g1=Bodies.rectangle(500,600,300,20,options)
World.add(world,g1)


 box1=new box(390,590,40,50)
 box2=new box(420,590,40,50)
 box3=new box(460,590,40,50)
 box4=new box(500,590,40,50)
 box5=new box(540,590,40,50)
 box6=new box(580,590,40,50)
 box7=new box(420,550,40,50)
 box8=new box(460,565,40,50)
 box9=new box(500,565,40,50)
 box10=new box(540,565,40,50)
 box11=new box(580,565,40,50)
 box12=new box(620,565,40,50)
 box13=new box(460,540,40,50)
 box14=new box(500,540,40,50)
 box15=new box(540,540,40,50)
 box16=new box(500,515,40,50)

ball1=new ball(200,690,20)
chuno=new chain(ball1.body,{x:200,y:200})
 Engine.run(engine);
 
}


async function draw() {
    rectMode(CENTER)
  background(bg);
  rect(g1.position.x,g1.position.y,300,20)

  drawSprites();
  Engine.update(engine)

  text("Score :"+ score,720,40)

  box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()



  

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
ball1.display()
chuno.display()
}

function mouseDragged(){Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})}
function mouseReleased(){chuno.yeet()} 
	function keyPressed(){if (keyCode===32){chuno.slingy_boi(ball1.body)}}
 
  async function lol(){
      var a  =await fetch("http://worldclockapi.com/api/json/est/now")
      var b=await a.json()
      var c=b.currentDateTime
      var d=c.slice(11,13)
    console.log(d)
    if (d>06&&d<18){yayeet="west.png"}
    else{yayeet="yayeet.png"}
    bg=loadImage(yayeet)
    }
  