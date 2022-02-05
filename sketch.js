const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button;
var bunny;
var blink,eat,sad;
var eatanimation;
var sadanimation;
var sadomnom;
var eatomnom;

var backsound, sadsound, cutsound, eatsound, airsound;
var i = 0;
var rope2,rope3;

function preload()
{
  bg_img = loadImage('back.cut the rope.jpeg');
  food = loadImage('candy.png');
  rabbit = loadImage('Rabbit-01.png');;
  blink = loadAnimation("img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png");
  //eatanimation = loadAnimation ("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  //sadanimation = loadAnimation ("sad_1.png","sad_2.png","sad_3.png");
  sadomnom =loadAnimation("Sad/sad1.png","Sad/sad2.png","Sad/sad3.png","Sad/sad4.png","Sad/sad5.png","Sad/sad6.png","Sad/sad7.png","Sad/sad8.png","Sad/sad9.png","Sad/sad10.png","Sad/sad11.png","Sad/sad12.png","Sad/sad13.png","Sad/sad14.png","Sad/sad15.png","Sad/sad16.png","Sad/sad17.png","Sad/sad18.png","Sad/sad19.png","Sad/sad20.png","Sad/sad21.png","Sad/sad22.png","Sad/sad23.png","Sad/sad24.png","Sad/sad25.png","Sad/sad26.png","Sad/sad27.png","Sad/sad28.png","Sad/sad29.png","Sad/sad30.png","Sad/sad31.png","Sad/sad32.png","Sad/sad33.png","Sad/sad34.png","Sad/sad35.png","Sad/sad36.png","Sad/sad37.png","Sad/sad38.png","Sad/sad39.png","Sad/sad40.png","Sad/sad41.png","Sad/sad42.png","Sad/sad43.png","Sad/sad44.png","Sad/sad45.png","Sad/sad46.png","Sad/sad47.png","Sad/sad48.png","Sad/sad49.png","Sad/sad50.png","Sad/sad51.png","Sad/sad52.png","Sad/sad53.png","Sad/sad54.png","Sad/sad55.png","Sad/sad56.png","Sad/sad57.png","Sad/sad58.png","Sad/sad59.png","Sad/sad60.png","Sad/sad61.png","Sad/sad62.png","Sad/sad63.png","Sad/sad64.png","Sad/sad65.png","Sad/sad66.png",)
  //eatanimation.looping = false;
  //eatanimation.playing = true;
  //sadanimation.looping = false;
  //sadanimation.playing = true;
  eatomnom= loadAnimation("eat/eat1.png","eat/eat2.png","eat/eat3.png","eat/eat4.png","eat/eat5.png","eat/eat6.png","eat/eat7.png","eat/eat8.png","eat/eat9.png","eat/eat10.png","eat/eat11.png","eat/eat12.png","eat/eat13.png","eat/eat14.png","eat/eat15.png","eat/eat16.png","eat/eat17.png","eat/eat18.png","eat/eat19.png","eat/eat20.png","eat/eat21.png","eat/eat22.png","eat/eat23.png","eat/eat24.png");
  eatomnom.looping = false;
  backsound = loadSound ("sound1.mp3");
  sadsound = loadSound ("sad.wav");
  eatsound = loadSound ("eating_sound.mp3");
  airsound = loadSound ("air.wav");
  cutsound = loadSound  ("cutting.mp3");


}

function setup() {
  var isitamovile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isitamovile){
    canvasw = displayWidth;
    canvash = displayHeight;
    createCanvas (displayWidth+80,displayHeight);
  }
  else {
    canvasw = windowWidth;
    canvash = windowHeight;
    createCanvas(windowWidth,windowHeight);
  }
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  let options = {
    isStatic:true
   };
 
 ground2 = Bodies.rectangle (200,690,600,20,options);
 World.add (world,ground2);

  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  button2 = createImg('cut_btn.png');
  button2.position(65,35);
  button2.size(50,50);
  button2.mouseClicked(drop2);

  button3 = createImg('cut_btn.png');
  button3.position(320,50);
  button3.size(50,50);
  button3.mouseClicked(drop3);

  blink.frameDelay = 20;
  //eatanimation.frameDelay = 20;
  //sadanimation.frameDelay = 20;

  bunny = createSprite(145,canvash-80,100,100);
  bunny.scale = 0.5;

  bunny.addAnimation('blinking',blink);
  //bunny.addAnimation ("eating",eatanimation);
  //bunny.addAnimation ("sad",sadanimation);
  bunny.addAnimation("sadomnom",sadomnom);
  bunny.addAnimation("eatomnom",eatomnom);
  bunny.changeAnimation ("blinking");
  
  rope = new Rope(7,{x:245,y:30});
  rope2 = new Rope (8,{x:100,y:50});
  rope3 = new Rope (8,{x:400,y:40});
  ground = new Ground(200,canvash,600,20);
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit2_con = new Link (rope2,fruit);
  fruit3_con = new Link (rope3,fruit);

  balloon = createImg ("balloon.png");
  balloon.position (50,245);
  balloon.size (150,100);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  balloon.mouseClicked (airecito);

  background(51);
  image(bg_img,width/2,height/2,displayWidth+80,displayHeight);

 if (fruit != null){
  image(food,fruit.position.x,fruit.position.y,50,50); 
 }

  rectMode (CENTER);
  rect (ground2.position.x, ground2.position.y,600,20);
  rope.show();
  rope2.show ();
  rope3.show ();
  Engine.update(engine);
  ground.show();

   drawSprites();

   if (collide (fruit,bunny)){
     bunny.scale=0.35;
     bunny.changeAnimation ("eatomnom");
     eatsound.play ();
   }
   
if (fruit!=null){
   var col =Matter.SAT.collides(fruit, ground.body);
   if (col.collided){
     bunny.scale= 0.35;
    bunny.changeAnimation('sadomnom');
    console.log(1);
   }
  }
  if (fruit != null && fruit.position.y >= 650){
    sadsound.play ();
    bunny.changeAnimation ("sadomnom");
    bunny.scale = 0.35;
    fruit = null
  }
  
}

function drop()
{
  if (i===0){
    cutsound.play(); 
    i=1;
  }
  
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

function drop2()
{
  if (i===0){
    cutsound.play(); 
    i=1;
  }
  
  rope2.break();
  fruit2_con.detach();
  fruit2_con = null; 
}

function drop3()
{
  if (i===0){
    cutsound.play(); 
    i=1;
  }
  
  rope3.break();
  fruit3_con.detach();
  fruit3_con = null; 
}

function collide (body,sprite){
 if (body!= null ){
   var distance = dist(body.position.x,body.position.y,sprite.position.x, sprite.position.y);
   if (distance <= 20){
     World.remove (world,fruit);
     fruit = null;
     return  true; 
   }
   else {
     return  false; 
   }
 }
}
function airecito (){
  airsound.play ();
  Matter.Body.applyForce (fruit, 
    {
    x:0,
    y:0,
    },{
    x:0.01,
    y:0,  
    })
}
