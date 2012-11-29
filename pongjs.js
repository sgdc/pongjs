var fps = 60;
var interval = 1000 / fps;

var paddleLeft = {
	x: 5,
	y: 125,
	w: 5,
	h: 50,
	speed: 0
};
var paddleRight = {
	x: 590,
	y: 125,
	w: 5,
	h: 50,
	speed: 0
}

var canvas;
var context;

$(document).ready(function()
{
	canvas = $('#pong-canvas').get(0);
	context = canvas.getContext('2d');

	$(window).keydown(function(e) {
		if(e.keyCode == 87)
			paddleLeft.speed = -5;
		else if(e.keyCode == 83)
			paddleLeft.speed = 5;
		if(e.keyCode == 38)
			paddleRight.speed = -5;
		else if(e.keyCode == 40)
			paddleRight.speed = 5;
	});

	$(window).keyup(function(e) {
		if(e.keyCode == 87 || e.keyCode == 83)
			paddleLeft.speed = 0;
		if(e.keyCode == 38 || e.keyCode == 40)
			paddleRight.speed = 0;
	});

    update();
});

function update()
{
	setTimeout(function() {
        window.requestAnimationFrame(update);

	    context.fillStyle = '#000000';
	    context.fillRect(0, 0, 600, 300);
	    context.fillStyle = '#FFFFFF';
	    paddleLeft.y += paddleLeft.speed;
	    paddleRight.y += paddleRight.speed;
	    context.fillRect(paddleLeft.x, paddleLeft.y, paddleLeft.w, paddleLeft.h);
	    context.fillRect(paddleRight.x, paddleRight.y, paddleRight.w, paddleRight.h);
    }, interval);
}