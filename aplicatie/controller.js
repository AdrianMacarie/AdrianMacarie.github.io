window.addEventListener("touchstart", touch_start_uab); 
window.addEventListener("touchmove", touch_move_uab, {passive:false}); 


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var canvas_rect = canvas.getBoundingClientRect();


function touch_start_uab(p)
{
	var t = p.changedTouches;
	for (var i = 0; i < t.length; i++){
		var touch_info = {};
		touch_info.x = t[i].pageX;
		touch_info.y = t[i].pageY;
		touch_info.id = t[i].identifier;
		touch_info.color = black;

		context.beginPath();
		context.arc(t[i].pageX - canvas_rect.left, t[i].pageY - canvas_rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = touch_info.color;
		context.fillStyle = touch_info.color;
		context.lineWidth = 1;
		context.fill();
		context.stroke();
	}
}

function touch_move_uab(p)
{	
	for (var i = 0; i < t.length; i++){
		var index_t = -1;
		for (var j = 0; j < last_position.length; j++)
			if (last_position[j].id == t[i].identifier){
				index_t = j;
				break;
			}
		context.beginPath();
		context.moveTo(last_position[index_t].x-canvas_rect.left, last_position[index_t].y-canvas_rect.top);
		context.lineTo(t[i].pageX-canvas_rect.left, t[i].pageY - canvas_rect.top);
		context.strokeStyle = last_position[index_t].color;
		context.fillStyle = last_position[index_t].color;
		context.lineWidth = 20;
		context.fill();		
		context.stroke();
		
		last_position[index_t].x = t[i].pageX;
		last_position[index_t].y = t[i].pageY;
	}
}


}