let snake;
let food;
let size = 15;
function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
  createCanvas(600, 600);
  
  frameRate(10);
  snake = new Snake(size);
  pickLocation(); 
}



function pickLocation(){
  let cols = floor(width/size);
  let rows = floor(height/size);
  food = createVector(random(cols),random(rows));
  food.mult(size);
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.direction(0,-1);
  } else if(keyCode == DOWN_ARROW){
    snake.direction(0,1);
  } else if (keyCode == LEFT_ARROW){
    snake.direction(-1,0);
  } else if(keyCode == RIGHT_ARROW){
    snake.direction(1,0);
  }
}

function draw() {
  background(51);
  if(snake.death()){
    scoreElem.html('Game Over! Refresh the page to play again : ' + snake.total);
    pickLocation();
  }
  snake.update();
  snake.show();
  fill(255,0,200);
  rect(food.x,food.y,size,size);
    if(snake.eat(food)){
     scoreElem.html('Score : ' + snake.total);
    pickLocation();
  }
}