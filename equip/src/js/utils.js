/**
 * author:berry equip
 * site:http://www.imokya.com
 */
const utils = function(equip,win) {
	var inherit = function(child, o) {
		if(typeof Object.create != "function") {
			var f = function() {};
			f.prototype = o;
			child.prototype = new f();
			
			child.prototype._super = f.prototype;
		} else { //执行这里
			child.prototype = Object.create(o);
			child.prototype._super = o;
		}
	}
	var extend = function(des, src) {
		for(var i in src) {
			if(des.hasOwnProperty(i)) {
				des[i] = src[i];
			}
		}
	}
	var trace = win.trace = function(str) {
		console.log(str);
	}
	var requestAnimFrame = win.requestAnimFrame = (function() {
		return function(callback, d) {
			var d = d || 18;
			console.log(self.delay)
			return setInterval(function() {
				var s = +new Date();
				callback(s);
				var e = +new Date();
				d = d-(e-s);
				console.log(d)
			}, d);
		}
	})();
	var cancelAnimFrame = win.cancelAnimFrame = (function(id) {
		return function(id) {
			clearTimeout(id);
		}
	})();
	var bind = win.bind = function(func, scope) {
		//console.log(func+"\n"+scope)
		var a = Array.prototype.slice.call(arguments,2);
		return function() {
			var b = Array.prototype.slice.call(arguments);
			b = b.concat(a);
			func.apply(scope,b);
		}
	}
	equip.utils = equip.utils || {};
	equip.utils.extend = extend;
	equip.utils.inherit = inherit;
	equip.utils.trace = trace;
	equip.utils.requestAnimFrame = requestAnimFrame;
	equip.utils.cancelAnimFrame = cancelAnimFrame;
	equip.utils.bind = bind;
};

export default utils;