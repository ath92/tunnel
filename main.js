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
	const current = counter + mouseY;
	background(0);
	drawCircle(windowWidth / 2, // x
	           windowHeight / 2, // y
	           windowHeight / 3, // radius
	           2000 + Math.cos(mouseX / windowWidth * 2 * Math.PI) * 200, // segments
	           Math.cos(current / 30) * 500 + 1000, //wobbleFactor
	           Math.sin(current / 1000000) + 100); // wobblePeriod
}

function drawCircle(x, y, radius, segments, wobbleFactor = 0.1, wobblePeriod = 1) {
	for (let i = 0; i < segments; i++){
		stroke(Math.tan(i/1000 + counter/100) * 255 + 100, Math.sin(i/2000 + counter/100) * 255 + 100, Math.cos(i/3000 + counter/100) * 255 + 100)
		line(x + Math.sin(((i - 1) / segments) * 2 * Math.PI) * (radius + Math.sin((i - 1) * wobblePeriod) * radius * wobbleFactor),
			 y + Math.cos(((i - 1) / segments) * 2 * Math.PI) * (radius + Math.sin((i - 1) * wobblePeriod) * radius * wobbleFactor),
			 x + Math.sin((i / segments) * 2 * Math.PI) * (radius + Math.sin(i * wobblePeriod) * radius * wobbleFactor),
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