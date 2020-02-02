    var canvas,ctx;
    var mouseX,mouseY,mouseDown=0;
    var touchX,touchY;
    function drawDot(ctx,x,y,size) {
        r=0; g=0; b=0; a=255;
        ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
    } 
    function clearCanvas(canvas,ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function canvas_mouseDown() {
        mouseDown=1;
        drawDot(ctx,mouseX,mouseY,12);
    }
    function canvas_mouseUp() {
        mouseDown=0;
    }
    function canvas_mouseMove(e) { 
        getMousePos(e);
        if (mouseDown==1) {
            drawDot(ctx,mouseX,mouseY,12);
        }
    }
    function getMousePos(e) {
        if (!e)
            var e = event;

        if (e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if (e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
     }

    function canvas_touchStart() {
        getTouchPos();
        drawDot(ctx,touchX,touchY,12);
        event.preventDefault();
    }
    function canvas_touchMove(e) { 
        getTouchPos(e);
        drawDot(ctx,touchX,touchY,12); 
        event.preventDefault();
    }
    function getTouchPos(e) {
        if (!e)
            var e = event;

        if(e.touches) {
            if (e.touches.length == 1) { 
                var touch = e.touches[0]; 
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
            }
        }
    }

    function init() {
        canvas = document.getElementById('canvas');
        if (canvas.getContext)
            ctx = canvas.getContext('2d');
        if (ctx) {
             canvas.addEventListener('mousedown', canvas_mouseDown, false);
            canvas.addEventListener('mousemove', canvas_mouseMove, false);
            window.addEventListener('mouseup', canvas_mouseUp, false);
            canvas.addEventListener('touchstart', canvas_touchStart, false);
            canvas.addEventListener('touchmove', canvas_touchMove, false);
        }
    }