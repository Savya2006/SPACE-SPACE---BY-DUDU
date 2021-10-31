var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("GIF.gif");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 500);
  spacecraft = createSprite(285,340);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.2;
  
  iss = createSprite(330,190);
  iss.addImage(issimg);
  iss.scale = 0.7;
}

function draw() {
  background(bg);
 // fill("red")
 //text(mouseX+ "," +mouseY,500,50); 
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);
    // spacecraft.x = spacecraft.x + Random(-1,1);
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

   /*if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

   /*if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successfull", 200, 360);
   }

  /* if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

  drawSprites();
}
