var canvas;
var context;
var fps = 60;
var interval = 1000 / fps;

function Rectangle(x, y, w, h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

var paddleLeft = new Rectangle(5, 165, 5, 70);
paddleLeft.speed = 5;

var paddleRight = new Rectangle(790, 165, 5, 70);
paddleRight.speed = 5;

var ball = new Rectangle(397, 197, 6, 6);
ball.velocity = { x: -5, y: 7 };