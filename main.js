let targetX, targetY, actualX, actualY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(255);
	actualX = 0;
	actualY = 0;
	setTarget();
}

function setTarget(){
	targetX = Math.random() * windowWidth;
	targetY = Math.random() * windowHeight;
	setTimeout(setTarget, 1000);
}

let counter = 0;
function draw() {
	actualX += (targetX - actualX) / 20;
	actualY += (targetY - actualY) / 20;
	counter++;
	blendMode(DARKEST);
	background(0);
	blendMode(ADD);
	drawCircle(windowWidth / 2, // x
	           windowHeight / 2, // y
	           windowHeight / 3, // radius
	           2000, // segments
	           Math.cos(counter / 1000 + Math.PI) * 500 + 499, //wobbleFactor
	           Math.sin(counter / 1000000) * 0.5); // wobblePeriod
}

function drawCircle(x, y, radius, segments, wobbleFactor = 0.1, wobblePeriod = 1) {
	for (let i = 0; i < segments; i++){
		stroke((Math.sin(counter % i) + 10) * 255 + 255, Math.sin(i/2000 + counter/100) * 255 + 255, Math.cos(i/3000 + counter/100) * 255 + 255)
		line(x + Math.sin(((i - 1) / segments) * 2 * Math.PI) * (radius + Math.sin((i - 1) * wobblePeriod * 2) * radius * wobbleFactor),
			 y + Math.cos(((i - 1) / segments) * 2 * Math.PI) * (radius + Math.sin((i - 1) * wobblePeriod * 3) * radius * wobbleFactor),
			 x + Math.sin((i / segments) * 2 * Math.PI) * (radius + Math.sin(i * wobblePeriod ) * radius * wobbleFactor),
			 y + Math.cos((i / segments) * 2 * Math.PI) * (radius + Math.sin(i * wobblePeriod) * radius * wobbleFactor));
	}
}

function keyPressed() {
	if (keyCode === 70) {
		fullscreen(!fullscreen());
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}