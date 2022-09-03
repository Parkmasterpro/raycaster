// True when the project is running
let running = false;

// Get the canvas element
const cvs = document.getElementById("gameing"); // Yes that is spelled right
// Get the '2d' context
const ctx = cvs.getContext('2d');

// The screen size
let screenWidth;
let screenHeight;

// Start the forever loop
function init() {
	if (!running) {
		forever();
	}
	running = true;
};

// Set up the canvas
function setCanvasInfo() {
	if (!isFullScreen()) {
		cvs.style.display = "none";
	} else {
		cvs.style.display = "block";
		cvs.width = window.innerWidth;
		cvs.height = window.innerHeight;
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;
	}
};

// The forever loop
function forever() {
	setCanvasInfo();
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, screenWidth, screenHeight);
	gameLoop();

	window.requestAnimationFrame(forever);
};

// This is the real game loop that does the game logic
function gameLoop() {
	map.draw(1);
};