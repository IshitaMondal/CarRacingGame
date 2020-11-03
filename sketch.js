var gameState = 0;
var playerCount;
var form,game,player;
var database;
var allPlayers;
var bg;

var car1,car2,car3,car4;
var cars = [];
var car1Image,car2Image,car3Image,car4Image,groundImage,trackImage;

function preload(){
    car1Image = loadImage("../images/car1.png");
    car2Image = loadImage("../images/car2.png");
    car3Image = loadImage("../images/car3.png");
    car4Image = loadImage("../images/car4.png");
    groundImage = loadImage("../images/ground.png");
    trackImage = loadImage("../images/track.jpg");
    bg = loadImage("../images/bg.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-15);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}
