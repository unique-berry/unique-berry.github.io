/**
 * author:berry equip
 * site:http://www.imokya.com
 */
const dispatcher =function(equip,win) {
	var EventDispatcher = function() {}
	EventDispatcher.prototype.addEventListener = 
	EventDispatcher.prototype.on = function(type,func) {
		this.listeners = this.listeners || {};
		(this.listeners[type] = this.listeners[type] || []) && this.listeners[type].push(func); 
	}
	EventDispatcher.prototype.removeEventListener = 
	EventDispatcher.prototype.off = function(type,func) {
		this.listeners = arguments.length == 0 ? {} : this.listeners;
		if(typeof func == "function") {
			for(var i = 0; i < this.listeners[type].length; i++) {
				if(func == this.listeners[type][i]) {
					this.listeners[type].splice(i, 1);
					break;
				}
			}
		} else {
			delete this.listeners[type];
		}
	}
	EventDispatcher.prototype.once = function(type,func) {
		var self = this;
		var f = function() {
			func.apply(self, arguments);
			self.off(type,f);
		}
		this.on(type,f);
	}
	EventDispatcher.prototype.dispatchEvent = 
	EventDispatcher.prototype.emit = function(type) {
		this.listeners = this.listeners || {};
		if(!this.listeners[type]) return;
		for(var i = 0; i < this.listeners[type].length; i++) {
			var callback = this.listeners[type][i];
			callback.apply(this, [].slice.call(arguments,1));
		}
	}
	equip.event = equip.event || {};
	equip.event.EventDispatcher = EventDispatcher;
};

export default dispatcher;
	
