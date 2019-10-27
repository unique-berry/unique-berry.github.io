/**
 * author:berry equip
 * site:http://www.imokya.com
 */

const scratch = function(equip,win) {
	var Scratch = function(opts) {
		this.opts = {
			w:300,
			h:300,
			topImg:'',
			bottomImg:'',
			radius:50,
			threshold:0.2,
			complete:null
		};
		equip.utils.extend(this.opts, opts);
		this.init();
	}
	equip.utils.inherit(Scratch,equip.event.EventDispatcher.prototype);
	Scratch.prototype.init = function() {
		this.elem = document.createElement("canvas");
		this.elem.setAttribute("width",this.opts.w);
		this.elem.setAttribute("height",this.opts.h);
		this.elem.style["background"] = "url("+this.opts.bottomImg.src+") no-repeat 0px 0px";
		this.ctx = this.elem.getContext("2d");
		this.beganHandler = bind(this.onBegan,this);
		this.movedHandler = bind(this.onMoved,this);
		this.endedHandler = bind(this.onEnded,this);
		this.elem.addEventListener(equip.event.eventBegan, this.beganHandler, false);
		this.elem.addEventListener(equip.event.eventMoved, this.movedHandler, false);
		this.elem.addEventListener(equip.event.eventEnded, this.endedHandler, false);
		this.drawing = false;
		this.initCanvas();
	}
	Scratch.prototype.initCanvas = function() {
		// this.ctx.fillRect(0, 0, this.opts.w, this.opts.h);
		this.ctx.drawImage(this.opts.topImg, 0, 0 , this.opts.topImg.width, this.opts.topImg.height, 0, 0, this.opts.topImg.width,this.opts.topImg.height);
		this.ctx.globalCompositeOperation = "destination-out";
		// this.ctx.lineStyle = "transparent";
		this.ctx.lineWidth = this.opts.radius;
	}
	Scratch.prototype.onBegan = function(e) {
		this.sPos = this.getPos(e);
		this.cPos = this.sPos;
		this.isDrawing = true;
	}
	Scratch.prototype.onMoved = function(e) {
		if(!this.isDrawing) return;
		var pos = this.getPos(e);
		var absX = Math.abs(pos.x - this.sPos.x);
		var r = this.cPos.getRadian(pos);
		var d = this.cPos.getDistance(pos);
		var step = 2;
		var lens = Math.floor(d / step);
		for(var i = 0; i < lens; i+=step) {
			var tx = this.cPos.x - step*Math.cos(r);
			var ty = this.cPos.y - step*Math.sin(r);
			this.drawDot(tx, ty);
			this.cPos.x = tx;
			this.cPos.y = ty;
		}
	}
	Scratch.prototype.onEnded = function(e) {
		 var pos = this.getPos(e);
		 this.isDrawing = false;
		 this.check();
	}
	Scratch.prototype.drawDot = function(x,y) {
		this.ctx.beginPath();
		this.ctx.arc(x, y, this.opts.radius/2, 0, Math.PI * 2, false);
		this.ctx.fill(
			);
	}
	Scratch.prototype.check = function() {
		var w = this.opts.w,h = this.opts.h;
		var data = this.ctx.getImageData(0, 0, w, h).data;
		for(var i = 0,j = 0; i < data.length; i += 4){
			if(data[i]==0 && data[i + 1]==0 && data[i + 2]==0 && data[i + 3]==0){
				j++;
			}
		}
		if(j >= w * h * 0.5){
			this.ctx.fillRect(0,0,w,h);
			this.clean();
			this.opts.complete &&this.opts.complete();
			console.log("complete")
			// this.emit("complete");
		}
	}
	Scratch.prototype.clean = function() {
		this.elem.removeEventListener(equip.event.eventBegan, this.beganHandler);
		this.elem.removeEventListener(equip.event.eventMoved, this.movedHandler);
		this.elem.removeEventListener(equip.event.eventEnded, this.endedHandler);
	}
	Scratch.prototype.getPos = function(e) {
		var tx = equip.event.touch ?
				 e.changedTouches[0].pageX - this.elem.offsetLeft :
				 e.pageX - this.elem.offsetLeft;
		var ty = equip.event.touch ? 
				 e.changedTouches[0].pageY - this.elem.offsetTop :
				 e.pageY - this.elem.offsetTop;
		return equip.gemo.point(tx,ty);
	}
	equip.canvas = equip.canvas || {};
	equip.canvas.Scratch = Scratch;
 }

 export default scratch;