code link; https://editor.p5js.org/Cerberus.Erza/sketches/LucXX5V6oW

let spriteX, spriteY;
let foodX, foodY;
let foodEaten = false


function setup() {
  createCanvas(600, 600);
spriteX = 100;
  spriteY = 100;
  foodX = random(200);
  foodY = random(200);

  spriteDiameter = 50;
  spriteSize = 0.5;

  foodDiameter = 50;
  foodEaten = false; 
  
  melonColor = "seagreen"
  
  distanceForCollision = spriteDiameter ;
}

function draw() {
  background(220);
  addKirby(spriteX, spriteY);
 addMelon(foodX, foodY, melonColor);

  
  let distance = Math.sqrt(Math.pow((spriteX - foodX), 2) + Math.pow(spriteY - foodY, 2))
  
  let spriteCloseEnough = distance < distanceForCollision;
  
      foodEaten = spriteCloseEnough; 
  
  
  if (foodEaten) {
      melonColor = "whitesmoke"
  } else
{
  melonColor = "seagreen"
}
  
    }

function keyPressed() {
  if (keyCode === UP_ARROW) {
    spriteY = spriteY - 10;
  } else if (keyCode === DOWN_ARROW) {
    spriteY = spriteY + 10;
  }
  if (keyCode === LEFT_ARROW) {
    spriteX = spriteX - 5;
  } else if (keyCode === RIGHT_ARROW) {
    spriteX = spriteX + 5;
  }
}
function addKirby(x, y) {
  push();
  noStroke();
  translate(x,y);
  //shoes
  fill(color("maroon"));
  ellipse(-30, 40, 85, 40);
  ellipse(30, 40, 85, 40);
  //body
  fill(color("palevioletred"));
  ellipse(0, 0, 120, 100);
  //arms
  fill(color("palevioletred"));
  ellipse(-60, 0, 40, 40);
  ellipse(60, 0, 40, 40);
  //mouth
  fill(color("darkred"));
  ellipse(0, 30, 10, 20);
  //eyes
  fill(color("royalblue"));
  ellipse(-30, -10, 20, 40);
  ellipse(30, -10, 20, 40);
  //eye lights
  fill(color("aliceblue"));
  ellipse(-30, -20, 10, 10);
  ellipse(30, -20, 10, 10);
  pop();
}

function addMelon(x,y) {
push()
translate(x,y)
  strokeWeight(2);
  stroke("darkslategray");
  fill(color(melonColor));
  ellipse(0, 0, 50, 50);
pop()

}
