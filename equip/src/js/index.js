import core from './core.js'
import dispatcher from './dispatcher.js'
import event from './event.js'
import utils from './utils'
import loader from './loader'
import point from './point.js'
import scratch from './scratch.js'
new core(window,document);
const equip= window.equip
new dispatcher(equip,window);
new event(equip,window)
new utils(equip,window)
new loader(equip,window)
new point(equip,window)
new scratch(equip,window)


