# 简介
自己在工作中封装的小插件，方便小型项目开发

<br>

# 使用


简单而快速的方法在页面中包含以下脚本：

```html
<script src="./equip.js"></script>
```

这将创建全局变量 `equip`


## Module

```bash
npm install scrollreveal
```

#### CommonJS

```js
const ScrollReveal = require('scrollreveal')
```

#### ES2015

```js
import ScrollReveal from 'scrollreveal'
```

<br>

# Usage

Installation provides us with the constructor function [`ScrollReveal()`](https://scrollrevealjs.org/api/constructor.html). Calling this function returns the ScrollReveal instance, the “brain” behind the magic.

> ScrollReveal employs the singleton pattern; no matter how many times the constructor is called, it will always return the same instance. This means we can call it anywhere, worry-free.

There’s a lot we can do with this instance, but most of the time we’ll be using the [`reveal()`](https://scrollrevealjs.org/api/reveal.html) method to create animation. Fundamentally, this is how to use ScrollReveal:

```html
<h1 class="headline">
    Widget Inc.
</h1>
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
