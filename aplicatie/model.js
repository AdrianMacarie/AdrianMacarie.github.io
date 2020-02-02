document.getElementById("id_logic").innerHTML = "2019.11.29.8";

window.addEventListener("touchstart", touch_start_uab, { passive: false }); 
window.addEventListener("touchmove", touch_move_uab, { passive: false }); 
window.addEventListener("touchend", touch_end_uab, { passive: false }); 


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var client_rect = canvas.getBoundingClientRect();

var last_touch = [];

function touch_start_uab(e)
{
	e.preventDefault();
	
	for (var i = 0; i < t.length; i++){
		context.beginPath();
		context.arc(t[i].pageX - client_rect.left, t[i].pageY - client_rect.top, 10, 0, 2 * Math.PI);
		context.fillStyle = black);
		context.strokeStyle = context.fillStyle;
		context.fill();
		context.stroke();
		
		var touch_info = {};
		touch_info.x = t[i].pageX;
		touch_info.y = t[i].pageY;
		touch_info.color = context.fillStyle;
		touch_info.id = t[i].identifier;
		
		last_touch.push(touch_info);
	}
}

