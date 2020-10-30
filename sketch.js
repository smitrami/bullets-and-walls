var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1400, 400);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color("white");
  bullet = createSprite(50, 200, 50, 50);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.shapeColor = "white";
}
//thickness = random(22, 83);
//thickness;

function draw() {
  background(0);
  bullet.velocityX = speed;
  //thickness = random(22, 83);

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (deformation > 10) {
      wall.shapeColor = color(255, 0, 0)
    }
    if (deformation < 10) {
      wall.shapeColor = color(0, 255, 0);
    }

  }

  drawSprites();
}
function hasCollided(bullet, wall) {
  bullet.RightEdge = bullet.x + bullet.width;
  wall.leftEdge = wall.x;
  if (bullet.RightEdge >= wall.leftEdge) {
    return true;
  }
  else {
    return false;
  }
}