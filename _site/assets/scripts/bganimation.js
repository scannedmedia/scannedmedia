var Canvas = document.getElementById('bganimation');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};
window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};

// Creates O's
presets.o = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = 'magenta';
            ctx.stroke();
        }
    }
};
// Creates O's
presets.n = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 15 * s,
        w: 3 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.rect(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4 , this.r, this.r*2);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = '#47BEAA';
            ctx.stroke();
        }
      
    }
};

// Creates m's
presets.m = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 15 * s,
        w: 3 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.rect(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4 , this.r*2, this.r*1.5);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = 'grey';
            ctx.stroke();
        }
      
    }
};
//renders shapes to screen
for(var x = 0; x < Canvas.width; x++) {
    for(var y = 0; y < Canvas.height; y++) {
        if(Math.round(Math.random() * 8000) == 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            var ran = Math.round(Math.random()*2);
            if( ran === 1)
                elements.push(presets.o(x, y, s, 0, 0));
            else if(ran === 2)
                elements.push(presets.n(x, y, s, 0, 0,));
            else
               elements.push(presets.m(x, y, s, 0, 0,));
        }
    }
}

// renders each frame
setInterval(function() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    var time = new Date().getTime();
    for (var e in elements)
		elements[e].draw(ctx, time);
}, 10);