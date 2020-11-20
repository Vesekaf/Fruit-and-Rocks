const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boyImg;

var ground, rock, constraint, tree;
var treeImg;

var stone, frruit;

var mango1, mango2, mango3, mango4, mango5;
var Spos, Mpos1, Mpos2, Mpos3, Mpos4, Mpos5;



function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(250, 600);
	boy.addImage(boyImg);
	boy.scale = 0.10;

	tree = new Tree();

	ground = new Ground(400, 675, 800, 50);

	rock = new ROK(207, 542, 50, 50);

	constraint = new Slingshot(rock.body, {x: 207, y: 542});

	mango1 = new Mango(700, 410, 50, 50);
	mango2 = new Mango(600, 300, 50, 50);
	mango3 = new Mango(750, 320, 50, 50);
	mango4 = new Mango(510, 400, 50, 50);
	mango5 = new Mango(550, 380, 50, 50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);

 

  ground.display();
  tree.display();
  rock.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  constraint.display();


  


//console.log(mouseX + ", " + mouseY );


// For Mango 1
var Mpos1 = mango1.body.position;
var Spos = rock.body.position;

var distance = dist(Spos.x, Spos.y, Mpos1.x, Mpos1.y)

	
	if(distance <= mango1.width + rock.width ){
					
		Matter.Body.setStatic(mango1.body, false);

	}

// for mango 2/*

var Mpos2 = mango2.body.position;


var distance = dist(Spos.x, Spos.y, Mpos2.x, Mpos2.y)

	
	if(distance <= mango2.width + rock.width ){
					
		Matter.Body.setStatic(mango2.body, false);

	}
// for mango 3
var Mpos3 = mango3.body.position;


var distance = dist(Spos.x, Spos.y, Mpos3.x, Mpos3.y)

	
	if(distance <= mango3.width + rock.width ){
					
		Matter.Body.setStatic(mango3.body, false);

	}


// for mango 4

var Mpos4 = mango4.body.position;


var distance = dist(Spos.x, Spos.y, Mpos4.x, Mpos4.y)

	
	if(distance <= mango4.width + rock.width ){
					
		Matter.Body.setStatic(mango4.body, false);

	}


// for mango 5

var Mpos5 = mango5.body.position;


var distance = dist(Spos.x, Spos.y, Mpos5.x, Mpos5.y)

	
	if(distance <= mango5.width + rock.width ){
					
		Matter.Body.setStatic(mango5.body, false);

	}


  drawSprites();
 
}

function mouseDragged(){

		Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});	
    
}


function mouseReleased(){
    constraint.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        
        
        Matter.Body.setPosition(rock.body, {x: 207, y:542});
        constraint.attach(rock.body);

    }
}











