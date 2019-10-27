/**
 * author:berry equip
 * site:http://www.imokya.com
 */
const point = function(equip,win) {
	var Point = function(x,y) {
		this.x = x;
		this.y = y;
	}
	Point.prototype.getDistance = function(point) {
		var tx = (this.x-point.x)*(this.x-point.x);
		var ty = (this.y-point.y)*(this.y-point.y);
		return Math.sqrt(tx,ty);
	}
	Point.prototype.getRadian = function(point) {
		return Math.atan2(this.y-point.y,this.x-point.x);
	}
	equip.gemo = equip.gemo || {};
	equip.gemo.Point = Point;
	equip.gemo.point = function(x,y) { return new Point(x,y); }
 }

 export default point;