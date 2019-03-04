function setup() {
	createCanvas(windowWidth, windowHeight);
	// colorMode(HSL, 255);
}

let counter = 0;
function draw() {
	counter += (mouseY / windowHeight) * 2 - 1;
	blendMode(DARKEST);
	background(0, 0, 0);
	blendMode(ADD);
	drawCircle(windowWidth / 2, // x
	           windowHeight / 2, // y
	           windowHeight / 2, // radius
	           2000, // segments
	           Math.cos(counter / 1000 + Math.PI) * 700 + 700, //wobbleFactor
	           Math.sin(counter / 1000000) * 0.5 + (mouseX / windowWidth - 0.5) * 0.05 + 1 * Math.PI); // wobblePeriod
}

function drawCircle(x, y, radius, segments, wobbleFactor = 0.1, wobblePeriod = 1) {
	for (let i = 0; i < segments; i++){
		strokeWeight(0.2);
		// colorMode(HSL, 255);
		stroke((Math.sin(counter / 40)) * 125 + 255, 120, (Math.cos(counter / 50)) * 125 + 255)
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