$(document).ready(function()
{
	init();
    game();
});

function init()
{
	canvas = $('#pong-canvas').get(0);
	context = canvas.getContext('2d');
	initInput();
}

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
	context.fillStyle = '#555555';
	for(var y = 5; y < 400; y += 20)
		context.fillRect(399, y, 2, 10);

	context.fillStyle = '#FFFFFF';
	context.fillRect(paddleLeft.x, paddleLeft.y, paddleLeft.w, paddleLeft.h);
	context.fillRect(paddleRight.x, paddleRight.y, paddleRight.w, paddleRight.h);
	context.fillRect(ball.x, ball.y, ball.w, ball.h);
}