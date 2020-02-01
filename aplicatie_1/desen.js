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
	
	var t = e.changedTouches;
	for (var i = 0; i < t.length; i++){
		context.beginPath();
		context.arc(t[i].pageX - client_rect.left, t[i].pageY - client_rect.top, 10, 0, 2 * Math.PI);
		context.fillStyle = black;
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

function touch_move_uab(e)
{
	e.preventDefault();

	var t = e.changedTouches;
	for (var i = 0; i < t.length; i++){
		var touch_index = -1;
		for (var j = 0; j < last_touch.length; j++)
			if (t[i].identifier == last_touch[j].id){
				touch_index = j;
				break;
			}
		context.beginPath();
		context.moveTo(last_touch[touch_index].x - client_rect.left, 
		last_touch[touch_index].y - client_rect.top);
		context.lineTo(t[i].pageX - client_rect.left, 
					t[i].pageY - client_rect.top);
		context.lineWidth = 20;
		context.strokeStyle = last_touch[touch_index].color;
		context.fillStyle = last_touch[touch_index].color;
		context.fill();
		context.stroke();
		
		last_touch[touch_index].x = t[i].pageX;
		last_touch[touch_index].y = t[i].pageY;
	}
}

function touch_end_uab(e)
{
	e.preventDefault();

	var t = e.changedTouches;
	for (var i = 0; i < t.length; i++){
		var touch_index = -1;
		for (var j = 0; j < last_touch.length; j++)
			if (t[i].identifier == last_touch[j].id){
				touch_index = j;
				break;
			}
		last_touch.splice(touch_index, 1);
	}
}