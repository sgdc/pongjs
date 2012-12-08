var keys = {
	s: false,
	w: false,
	up: false,
	down: false
};

function initInput()
{
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
}