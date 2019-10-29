# 简介
自己在工作中封装的小插件，方便小型项目开发

<br>

# 使用


简单而快速的方法在页面中包含以下脚本：

```html
<script src="./equip.js"></script>
```

这将创建全局变量 `equip`



# API

### event事件

插件里面做了pc端和mobile的事件兼容
例如
```
this.elem.addEventListener(equip.event.eventBegan, function(){}, false);
```

equip.event.click  mobile端对应touchstart, pc端对应click

equip.event.eventBegan mobile端对应touchstart, pc端对应mousedown

equip.event.eventMoved mobile端对应touchmove, pc端对应mousemove

equip.event.eventEnded mobile端对应touchend, pc端对应mouseup

### dispatcher事件派发

通过使用事件派发机制完成了较为复杂的解耦，代码之间耦合度降低，事件机制通过事件的侦听获取，因此不管发送还是接受，删除修改后都不会引起任何相关联的错误提供了一种将一个封闭模块中的数据传递给另一个封闭模块方法。

使用事件派发需要先给目标对象继承dispatcher方法需要用到equip.utils.inherit（）继承方法

```
var demo = function(){}
equip.utils.inherit(demo, equip.event.EventDispatcher.prototype)
```
然后new demo的实例就拥有事件派发能力
```
var demoo = new demo();
demoo.on('xxxx',function(){
	console.log("dispatcher")
})

demmo.emit('xxxx')

打印出dispatcher
```

### utils
inherit继承
equip.utils.inherit(child,o) child继承o原型

extend合并
equip.utils.extend(des,src) src对象的值会合并并且覆盖到des对象上面

### canvas 
new equip.canvas.Scratch(obj) 实现擦灰功能

```
obj = {
	w:宽度,h:高度,
	topImg:顶部图片,
	bottomImg:底部图片,
	complete:回调函数
	}
```



