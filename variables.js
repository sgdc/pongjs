var fps = 60;
var interval = 1000 / fps;

var paddleLeft = {
	x: 5,
	y: 165,
	w: 5,
	h: 70,
	speed: 0
};
var paddleRight = {
	x: 790,
	y: 165,
	w: 5,
	h: 70,
	speed: 0
}
var ball = {
	x: 397,
	y: 197,
	w: 6,
	h: 6
}

var canvas;
var context;