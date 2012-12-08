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

	ball.x += ball.velocity.x;
	ball.y += ball.velocity.y;

	if(paddleLeft.y < 0)
		paddleLeft.y = 0;
	else if(paddleLeft.y > 400 - paddleLeft.h)
		paddleLeft.y = 400 - paddleLeft.h;
	if(paddleRight.y < 0)
		paddleRight.y = 0;
	else if(paddleRight.y > 400 - paddleRight.h)
		paddleRight.y = 400 - paddleRight.h;

	bounceBall(ball, paddleLeft, paddleRight);
}

function bounceBall(ball, left, right)
{
	if(ball.y < 0 || ball.y > 400 - ball.h)
	{
		ball.velocity.y *= -1;
	}
	if(ball.x < 10)
	{
		if(ball.y > left.y + left.h || ball.y + ball.h < left.y)
		{
			ball.velocity.x = 0;
			ball.velocity.y = 0;
		}
		else
		{
			ball.x = 10;
			ball.velocity.x *= -1;
		}
	}
	else if(ball.x > 790 - ball.w)
	{
		if(ball.y > right.y + right.h || ball.y + ball.h < right.y)
		{
			ball.velocity.x = 0;
			ball.velocity.y = 0;
		}
		else
		{
			ball.x = 790 - ball.w;
			ball.velocity.x *= -1;
		}
	}
}

function draw()
{
	context.fillStyle = '#000000';
	context.fillRect(0, 0, 800, 600);
	context.fillStyle = '#555555';
	for(var y = 5; y < 400; y += 20)
		context.fillRect(399, y, 2, 10);

	context.fillStyle = '#FFFFFF';
	drawRect(paddleLeft);
	drawRect(paddleRight);
	drawRect(ball);
}

function drawRect(rect)
{
	context.fillRect(rect.x, rect.y, rect.w, rect.h);
}