var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score1 = 0;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  text("P1 score:"+ score,50,50);
  text("P2 score:"+ score1,50,60);
  if(fruitGroup.isTouching(player1)){
    score = score += 1;
  }
  if(fruitGroup.isTouching(player2)){
    score1 = score1 += 1;
  }
  if(score === 500 || score1 === 500){
    gameState === 2;
  }
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   text("P1 score:"+ score,50,50);
   text("P2 score:"+ score1,50,60);
}