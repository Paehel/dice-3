var dice;
var d1, d1I, D1, D1I;
var d2, d2I, D2, D2I;
var d3, d3I, D3, D3I;
var d4, d4I, D4, D4I;
var d5, d5I, D5, D5I;
var d6, d6I, D6, D6I;

var diceAnimation1,diceAnimation2, move1, move2;
var rand;
var form;
var title;
var input;
var button, ok;

var selectedNumber = null;

var reset, resetI;

var N1 = null;
var N2 = null;
var sum = 0;
var score = 0;
var subtract1 = 0;
var subtract2 = 0;
var multiply = 0;

function preload(){
  d1I = loadAnimation("sprites/1.png");
  d2I = loadAnimation("sprites/2.png");
  d3I = loadAnimation("sprites/3.png");
  d4I = loadAnimation("sprites/4.png");
  d5I = loadAnimation("sprites/5.png");
  d6I = loadAnimation("sprites/6.png");
  diceAnimation1 = loadAnimation("sprites/1.png", "sprites/2.png", "sprites/3.png", "sprites/4.png", "sprites/5.png", "sprites/6.png");

  D1I = loadAnimation("sprites/1COPY.png");
  D2I = loadAnimation("sprites/2COPY.png");
  D3I = loadAnimation("sprites/3COPY.png");
  D4I = loadAnimation("sprites/4COPY.png");
  D5I = loadAnimation("sprites/5COPY.png");
  D6I = loadAnimation("sprites/6COPY.png");
  diceAnimation2 = loadAnimation("sprites/1COPY.png", "sprites/2COPY.png", "sprites/3COPY.png", "sprites/4COPY.png", "sprites/5COPY.png", "sprites/6COPY.png");

  ok = loadImage("sprites/ok.jpg");
  resetI = loadImage("sprites/reset.jpg");
}

function setup() {
  createCanvas(displayWidth - 200,displayHeight - 200);

  title = createElement('h1');
  input = createInput("");


  title.html("Guess the number on the dice");
  console.log(title);
  title.position(370,50);

  input.position(550,270); 
  

  button = createSprite(565,305,60,20);
  button.addImage("okImage", ok);

  reset = createSprite(650,305,60,20);
  reset.addImage("resetImage", resetI);

  move1 = createSprite(200,200,50,50);
  move1.addAnimation("dice", diceAnimation1);
  move1.addAnimation("dice1", d1I);
  move1.addAnimation("dice2", d2I);
  move1.addAnimation("dice3", d3I);
  move1.addAnimation("dice4", d4I);
  move1.addAnimation("dice5", d5I);
  move1.addAnimation("dice6", d6I);

  move2 = createSprite(200,300,50,50);
  move2.addAnimation("diceC", diceAnimation2);
  move2.addAnimation("diceC1", D1I);
  move2.addAnimation("diceC2", D2I);
  move2.addAnimation("diceC3", D3I);
  move2.addAnimation("diceC4", D4I);
  move2.addAnimation("diceC5", D5I);
  move2.addAnimation("diceC6", D6I);

  
}


function draw() {
  background("white");  

  if(mousePressedOver(button)){
    selectedNumber = input.value();
   
   }


  if(mousePressedOver(move1) && selectedNumber !== null ){
    rand = Math.round(random(1,6));

    if(rand === 1 ){
     move1.changeAnimation("dice1", d1I);
      N1 = 1;

    }else if(rand === 2){
      move1.changeAnimation("dice2", d2I);
      N1 = 2;

    }else if(rand === 3){
      move1.changeAnimation("dice3", d3I);
      N1 = 3;

    }else if (rand === 4){
      move1.changeAnimation("dice4", d4I);
      N1 = 4;

    }else if(rand === 5){
      move1.changeAnimation("dice5", d5I);
      N1 = 5;

    }else if (rand === 6){
      move1.changeAnimation("dice6", d6I);
      N1 = 6;

    }
  }

  if(mousePressedOver(move2) && selectedNumber !== null){
    rand = Math.round(random(1,6));

    if(rand === 1){
     move2.changeAnimation("diceC1", D1I);
     N2 = 1;

    }else if(rand === 2){
      move2.changeAnimation("diceC2", D2I);
      N2 = 2;

    }else if(rand === 3){
      move2.changeAnimation("diceC3", D3I);
      N2 = 3;

    }else if (rand === 4){
      move2.changeAnimation("diceC4", D4I);
      N2 = 4;

    }else if(rand === 5){
      move2.changeAnimation("diceC5", D5I);
      N2 = 5;

    }else if (rand === 6){
      move2.changeAnimation("diceC6", D6I);
      N2 = 6;

    }
  }
  
  text("Score:" + score, 1000, 30 );
  textFont("Georgia");
  
  
if(N1 !== null && N2 !== null){
    if( selectedNumber === N1 + N2 ){
      score ++;
      
     }else
     if(selectedNumber === N1 - N2 ){
     score ++;
     
     }else
     if(selectedNumber === N2 - N1 ){
      score ++;
      
     }else
     if(selectedNumber === N1 * N2 ){
      score ++ ;
      
     }
     
    }

    console.log(N1);
    console.log(N2);
    console.log(score);
   
 

 if(mousePressedOver(reset)){
  selectedNumber = null;

   N1 = null;
   N2 = null;

   move1.changeAnimation("dice", diceAnimation1);
   move2.changeAnimation("diceC", diceAnimation2);

   input.value(null);
 }


  drawSprites();
}