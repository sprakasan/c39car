var gameState = 0
var playerCount 
var database
var form, player, game
var allPlayers
var distance = 0
var car1, car2, car3, car4,cars
var c1,c2,c3,c4,track
function preload(){
    c1=loadImage("images/car1.png")
    c2=loadImage("images/car2.png")
    c3=loadImage("images/car3.png")
    c4=loadImage("images/car4.png")
    track=loadImage("images/track.jpg")
}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth, displayHeight);

    game = new Game()
    game.getState()
    game.start()

}

function draw(){
    background("white");



  if (playerCount === 4){
      game.update(1)
  }
  if(gameState === 1){
      clear()
      game.play()
  }
  if(gameState === 2){
      game.end()
  }
}



