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

    game();
});

function game()
{
	setTimeout(function() {
        window.requestAnimationFrame(game);

        update();
        draw();
    }, interval);
}

function update()
{
	paddleLeft.y += paddleLeft.speed;
	paddleRight.y += paddleRight.speed;	
}

function draw()
{
	context.fillStyle = '#000000';
	context.fillRect(0, 0, 800, 600);

	context.fillStyle = '#FFFFFF';
	context.fillRect(paddleLeft.x, paddleLeft.y, paddleLeft.w, paddleLeft.h);
	context.fillRect(paddleRight.x, paddleRight.y, paddleRight.w, paddleRight.h);
	context.fillRect(ball.x, ball.y, ball.w, ball.h);
}