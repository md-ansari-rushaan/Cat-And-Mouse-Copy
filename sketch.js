var catImg,cat,mouseImg,mouse;
var cat_animation,mouse_animation;
var cat_finall,mouse_finall;
var garden,garden_img;
function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    cat_animation = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_animation = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat_finall = loadImage("images/cat4.png");
    mouse_finall = loadImage("images/mouse4.png");
    garden_img = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(garden_img);

    cat = createSprite(800,600);
    cat.addImage(catImg);
    cat.scale = 0.2;
    mouse  = createSprite(150,600);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("LEFT")){

        keyPressed();
    }
    
    
    
    if(cat.x-mouse.x - 90 < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addImage("finall",cat_finall);
        cat.changeImage("finall")
        mouse.addImage("finall",mouse_finall);
        mouse.changeImage("finall");
    }
    
    
    drawSprites();
}


function keyPressed(){
    
    //For moving and changing animation write code here
        cat.velocityX = -5;
        cat.addAnimation("Running",cat_animation);
        cat.changeAnimation("Running");
        mouse.addAnimation("mouse_running",mouse_animation);
        mouse.changeAnimation("mouse_running");
    
}
