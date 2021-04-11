var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
sprite1=createSprite(100,580,200,10);
sprite2=createSprite(300,580,200,10);
sprite3=createSprite(500,580,200,10);
sprite4=createSprite(700,580,200,10);
ball=createSprite(random(20,780),300,10,10);
sprite1.shapeColor="red"
sprite2.shapeColor="orange"
sprite3.shapeColor="blue"
sprite4.shapeColor="green"
ball.shapeColor=rgb(0,0,0)
ball.velocityX=5
ball.velocityY=4

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(ball.isTouching(sprite1)){
    ball.shapeColor="red"
    }
         if(ball.isTouching(sprite2)){
        ball.shapeColor="orange"
        }
      if(ball.isTouching(sprite3)){
        ball.shapeColor="blue"
            }
      if(ball.isTouching(sprite4)){
      ball.shapeColor="green"    
      ball.setVelocity(0,0)
                }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
