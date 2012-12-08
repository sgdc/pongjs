$(document).ready(function()
{
	canvas = $('#pong-canvas').get(0);
	context = canvas.getContext('2d');

	$(window).keydown(function(e) {
		if(e.keyCode == 87)
			keys.w = true;
		if(e.keyCode == 83)
			keys.s = true;
		if(e.keyCode == 38)
			keys.up = true;
		if(e.keyCode == 40)
			keys.down = true;
	});

	$(window).keyup(function(e) {
		if(e.keyCode == 87)
			keys.w = false;
		if(e.keyCode == 83)
			keys.s = false;
		if(e.keyCode == 38)
			keys.up = false;
		if(e.keyCode == 40)
			keys.down = false;
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
	if(keys.w)
		paddleLeft.y -= paddleLeft.speed;
	if(keys.s)
		paddleLeft.y += paddleLeft.speed;
	if(keys.up)
		paddleRight.y -= paddleRight.speed;	
	if(keys.down)
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