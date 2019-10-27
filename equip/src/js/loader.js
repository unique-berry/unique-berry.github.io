/**
 * author:berry equip
 * site:http://www.imokya.com
 */
const loader = function(equip,win) {
	var Loader = function() { this.manifest={};}//aa
	equip.utils.inherit(Loader, equip.event.EventDispatcher.prototype);
	Loader.prototype.load = function(data,base="") {//date：加载的数据，  base：理解为相对地址文件夹名称
		this.total = data.length;
		this.count = 0;
		var self = this;
		for(var i = 0;i < this.total; i++) {
			var img = new Image();
			img.onload = function() {
				if(++self.count == self.total) {
					self.emit("load");
				}
			}
			img.src = base+"/"+data[i];
			this.manifest[data[i]]=img;
		}
	}
	Loader.prototype.getRes = function(id) {
		return this.manifest[id];
	}
	equip.utils = equip.utils || {};
	equip.utils.Loader = Loader;
};

export default loader