var database;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var player;
var bullet;
var points;
var Gstate = 0;
var nameInput;
var strtButton;
var name;
var form;
var Hscore;
var Hname;


function setup() {
  createCanvas(1000, 1000);

  database = firebase.database();

  enemy1 = createSprite(100, 100, 30, 30);
  enemy2 = createSprite(200, 150, 30, 30);
  enemy3 = createSprite(300, 200, 30, 30);
  enemy4 = createSprite(400, 250, 30, 30);
  enemy5 = createSprite(500, 300, 30, 30);
  enemy6 = createSprite(600, 350, 30, 30);
  enemy7 = createSprite(700, 400, 30, 30);
  enemy8 = createSprite(800, 450, 30, 30);
  enemy9 = createSprite(900, 500, 30, 30);

  bullet = createSprite(-50, -50, 10, 20);
  player = createSprite(500, 900, 50, 20);
  points = 0;

  nameInput = createInput("NAME");
  nameInput.position(460, 420);
  
  strtButton = createButton("START");
  strtButton.position(460, 500);

  enemy1.velocityX = random(-15, 15);
  enemy2.velocityX = random(-15, 15);
  enemy3.velocityX = random(-15, 15);
  enemy4.velocityX = random(-15, 15);
  enemy5.velocityX = random(-15, 15);
  enemy6.velocityX = random(-15, 15);
  enemy7.velocityX = random(-15, 15);
  enemy8.velocityX = random(-15, 15);
  enemy9.velocityX = random(-15, 15);
}

function enemyCode(){
  enemy1.bounceOff(enemy2);
  enemy1.bounceOff(enemy3);
  enemy1.bounceOff(enemy4);
  enemy1.bounceOff(enemy5);
  enemy1.bounceOff(enemy6);
  enemy1.bounceOff(enemy7);
  enemy1.bounceOff(enemy8);
  enemy1.bounceOff(enemy9);

  enemy2.bounceOff(enemy3);
  enemy2.bounceOff(enemy4);
  enemy2.bounceOff(enemy5);
  enemy2.bounceOff(enemy6);
  enemy2.bounceOff(enemy7);
  enemy2.bounceOff(enemy8);
  enemy2.bounceOff(enemy9);

  enemy3.bounceOff(enemy4);
  enemy3.bounceOff(enemy5);
  enemy3.bounceOff(enemy6);
  enemy3.bounceOff(enemy7);
  enemy3.bounceOff(enemy8);
  enemy3.bounceOff(enemy9);

  enemy4.bounceOff(enemy5);
  enemy4.bounceOff(enemy6);
  enemy4.bounceOff(enemy7);
  enemy4.bounceOff(enemy8);
  enemy4.bounceOff(enemy9);

  enemy5.bounceOff(enemy6);
  enemy5.bounceOff(enemy7);
  enemy5.bounceOff(enemy8);
  enemy5.bounceOff(enemy9);

  enemy6.bounceOff(enemy7);
  enemy6.bounceOff(enemy8);
  enemy6.bounceOff(enemy9);

  enemy7.bounceOff(enemy8);
  enemy7.bounceOff(enemy9);

  enemy8.bounceOff(enemy9);



  enemy1.shapeColor = color(random(0, 255), 0, 0);
  enemy4.shapeColor = color(random(0, 255), 0, 0);
  enemy7.shapeColor = color(random(0, 255), 0, 0);
  
  enemy2.shapeColor = color(0, random(0, 255), 0);
  enemy5.shapeColor = color(0, random(0, 255), 0);
  enemy8.shapeColor = color(0, random(0, 255), 0);

  enemy3.shapeColor = color(0, 0, random(0, 255));
  enemy6.shapeColor = color(0, 0, random(0, 255));
  enemy9.shapeColor = color(0, 0, random(0, 255));

  enemy1.velocityY = random(10, 15);
  enemy2.velocityY = random(10, 15);
  enemy3.velocityY = random(10, 15);
  enemy4.velocityY = random(10, 15);
  enemy5.velocityY = random(10, 15);
  enemy6.velocityY = random(10, 15);
  enemy7.velocityY = random(10, 15);
  enemy8.velocityY = random(10, 15);
  enemy9.velocityY = random(10, 15);

  if (enemy1.x > 1000){
    enemy1.x = 0;
    enemy1.velocityX = random(-15, 15);
  }
  if (enemy1.x < 0){
    enemy1.x = 1000;
    enemy1.velocityX = random(-15, 15);
  }
  if (enemy1.y > 1000){
    enemy1.y = 0;
  }


  if (enemy2.x > 1000){
    enemy2.x = 0;
    enemy2.velocityX = random(-15, 15);
  }
  if (enemy2.x < 0){
    enemy2.x = 1000;
    enemy2.velocityX = random(-15, 15);
  }
  if (enemy2.y > 1000){
    enemy2.y = 0;
  }


  if (enemy3.x > 1000){
    enemy3.x = 0;
    enemy3.velocityX = random(-15, 15);
  }
  if (enemy3.x < 0){
    enemy3.x = 1000;
    enemy3.velocityX = random(-15, 15);
  }
  if (enemy3.y > 1000){
    enemy3.y = 0;
  }


  if (enemy4.x > 1000){
    enemy4.x = 0;
    enemy4.velocityX = random(-15, 15);
  }
  if (enemy4.x < 0){
    enemy4.x = 1000;
    enemy4.velocityX = random(-15, 15);
  }
  if (enemy4.y > 1000){
    enemy4.y = 0;
  }


  if (enemy5.x > 1000){
    enemy5.x = 0;
    enemy5.velocityX = random(-15, 15);
  }
  if (enemy5.x < 0){
    enemy5.x = 1000;
    enemy5.velocityX = random(-15, 15);
  }
  if (enemy5.y > 1000){
    enemy5.y = 0;
  }


  if (enemy6.x > 1000){
    enemy6.x = 0;
    enemy6.velocityX = random(-15, 15);
  }
  if (enemy6.x < 0){
    enemy6.x = 1000;
    enemy6.velocityX = random(-15, 15);
  }
  if (enemy6.y > 1000){
    enemy6.y = 0;
  }


  if (enemy7.x > 1000){
    enemy7.x = 0;
    enemy7.velocityX = random(-15, 15);
  }
  if (enemy7.x < 0){
    enemy7.x = 1000;
    enemy7.velocityX = random(-15, 15);
  }
  if (enemy6.y > 1000){
    enemy6.y = 0;
  }


  if (enemy8.x > 1000){
    enemy8.x = 0;
    enemy8.velocityX = random(-15, 15);
  }
  if (enemy8.x < 0){
    enemy8.x = 1000;
    enemy8.velocityX = random(-15, 15);
  }
  if (enemy8.y > 1000){
    enemy8.y = 0;
  }


  if (enemy9.x > 1000){
    enemy9.x = 0;
    enemy9.velocityX = random(-15, 15);
  }
  if (enemy9.x < 0){
    enemy9.x = 1000;
    enemy9.velocityX = random(-15, 15);
  }
  if (enemy9.y > 1000){
    enemy9.y = 0;
  }
}

function playerOrBulletCode(){
  player.x = mouseX;

  if (player.isTouching(enemy1)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy2)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy3)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy4)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy5)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy6)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy7)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy8)){
    player.destroy();
    Gstate = 2;
  }
  if (player.isTouching(enemy9)){
    player.destroy();
    Gstate = 2;
  }



  if (keyWentDown("space") && bullet.x === -50  && bullet.y === -50){
    bullet.x = player.x;
    bullet.y = player.y;
    bullet.velocityY = -25
  }

  if (bullet.y === 0){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
  }

  if (bullet.isTouching(enemy1)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy1.y = 0;
    points++
  }

  if (bullet.isTouching(enemy2)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy2.y = 0;
    points++
  }

  if (bullet.isTouching(enemy3)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy3.y = 0;
    points++
  }

  if (bullet.isTouching(enemy4)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy4.y = 0;
    points++
  }

  if (bullet.isTouching(enemy5)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy5.y = 0;
    points++
  }

  if (bullet.isTouching(enemy6)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy6.y = 0;
    points++
  }

  if (bullet.isTouching(enemy7)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy7.y = 0;
    points++
  }

  if (bullet.isTouching(enemy8)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy8.y = 0;
    points++
  }

  if (bullet.isTouching(enemy9)){
    bullet.x = -50;
    bullet.y = -50;
    bullet.velocityY = 0;
    enemy9.y = 0;
    points++
  }
}

function draw() {
  console.log(points)
  if (Gstate === 0){
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    enemy4.visible = false;
    enemy5.visible = false;
    enemy6.visible = false;
    enemy7.visible = false;
    enemy8.visible = false;
    enemy9.visible = false;
    player.visible = false;

    strtButton.mousePressed(()=>{
      Gstate = 1;
      enemy1.visible = true;
      enemy2.visible = true;
      enemy3.visible = true;
      enemy4.visible = true;
      enemy5.visible = true;
      enemy6.visible = true;
      enemy7.visible = true;
      enemy8.visible = true;
      enemy9.visible = true;
      player.visible = true;
      name = nameInput.value();
      strtButton.hide();
      nameInput.hide();
    })
  }

  if (Gstate === 2){
    background(255, 200, 255);
    read();
    if (points === Hscore || points > Hscore ){
      update();
    }
    textSize(50);
    textFont("Times New Roman");
    text("YOU DIED", 50 , 500);
    textSize(30);
    text("Your score was " + points, 50, 580)
    text("The World Highscore is " + Hscore + " by " + Hname, 50, 660)
  }

  if (Gstate === 1){
    background(0, 0, 25);
    enemyCode();
    playerOrBulletCode();
  }
  drawSprites();
}

function update(){
  database.ref("/").update({
    highScore : points,
    highName : name
  })
}

function read(){
  var highRef = database.ref('highScore'); 
  highRef.on("value", (data)=>{
    Hscore = data.val();
  })
  var nameRef = database.ref('highName'); 
  nameRef.on("value", (data)=>{
    Hname = data.val();
  })
}