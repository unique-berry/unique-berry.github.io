/**
 * author:berry equip
 * site:http://www.imokya.com
 */
const event = function(equip,win) {
	equip.event = equip.event || {};
	equip.event.touch = !!("ontouchstart" in document);
	equip.event.click = equip.event.touch ? "touchstart" : "click";
	equip.event.eventBegan = equip.event.touch ? "touchstart" : "mousedown";
	equip.event.eventMoved = equip.event.touch ? "touchmove" : "mousemove";
	equip.event.eventEnded = equip.event.touch ? "touchend" : "mouseup";
};

export default event;