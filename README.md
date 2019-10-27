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

event事件

插件里面做了pc端和mobile的事件兼容
例如
```
this.elem.addEventListener(equip.event.eventBegan, function(){}, false);
```

equip.event.click 点击事件 mobile端对应touchstart pc端对应click

equip.event.eventBegan 点击事件mobile端对应touchstart pc端对应mousedown

```

```js
ScrollReveal().reveal('.headline')
```

**🔎 See this demo live on [JSBin](http://jsbin.com/jufohaxonu/edit?html,output)**

<br>

---

### The full documentation can be found at [https://scrollrevealjs.org](https://scrollrevealjs.org)

> If you’re using an older version of ScrollReveal, you can find legacy documentation in the [wiki](https://github.com/scrollreveal/scrollreveal/wiki)

---

<br>

<a href="https://scrollrevealjs.org/pricing/" title="Visit ScrollReveal pricing page">
	<img align="right" height="300" src="https://scrollrevealjs.org/img/license.svg" alt="Commercial License Badge">
</a>

<br>

# License

**For commercial sites, themes, projects, and applications, keep your source code private/proprietary by purchasing a [Commercial License](https://scrollrevealjs.org/pricing/).**

Licensed under the GNU General Public License 3.0 for compatible open source projects and non-commercial use.

<br>

Copyright 2018 Fisssion LLC
