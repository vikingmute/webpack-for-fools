## Webpack傻瓜式指南

**大约一年前我写了第一版的 webpack 傻瓜指南，当时只是想写一篇方便大家理解通俗易懂的文章，随着时间的推移，在这一年内我和朋友出了一本名叫 React全栈 的书，同时我也在思考在当前各种前端培训鱼龙混杂的情况下，应该用什么正确的方法让大对前端开发感兴趣的人获取知识，同时 webpack2 的推出，让原来教程的一大部分都已经不再适用，所以我想可以更新一个新的傻瓜教程，让大家感受一些新版 webpack 的魅力**

### 模块化开发

ES6 之前，Javascript 并没有原生的模块的，Javascript 开发者通过各种约定或妥协实现了模块的特征，如独立的命名空间，暴露属性与方法的能力等。粗略分析的话，这一过程大致经历了三个阶段：全局变量 + 命名空间（namespace），AMD ， CommonJS，ES6 模块。这部分我就不展开讲了。这里要说的就是随着 Node.js 的出现， Common.js 的出现，给模块开发带来了新的方法和思路。

```javascript
var path = require('path')
console.log(path)
```

想法是美好的，但是这种方法并不适用浏览器环境，单线程的 Javascript 可以使用一些另类的方法完成这些工作，比如动态加载一个 script 或者使用 XHR，当然也可以同步的加载一个 Javascript 文件，但是会直接 block 住后面代码的执行。

```javascript
//xhr
$.getScript("my_lovely_script.js", function(){
   alert("Script loaded but not necessarily executed.");
});
```
异步加载 script 的方法不是我们想要的，必须在回调方法中才能使用，有没有怎样一种方法能够像 Node.js 一样进行模块化开发呢。假如我们所写的浏览器端代码也采用 common.js 的方法，甚至能做到前后端同用一套代码，何乐而不为？

### 使用 webpack，完成一个最简单的例子

上面提出了一个难题，简单来说 webpack 可以帮助解决这个问题（当然它的功能远远超过这个）。 先来安装一下，我在这里建议大家至少使用 node  6.0.0 以上的版本。

```bash
npm install webpack -g
```
目前 webpack 的版本为 2.3.3

创建第一个称为 hello.js 的模块

Webpack 天生支持 ES6 import 和 export 的模块语法，可以直接使用。当然你也可以使用 common.js 来写。

在同一个文件夹下新建两个文件。

```javascript
//hello.js
export default function () {
    alert('from anohter planet')
}
```

```javascript
//index.js
import hello from './hello'
//调用这个方法
hello()
```

现在使用 webpack 来处理我们的入口文件。使用 webpack cli 可以传入两个参数，第一个是入口文件，这里就是 index.js, 第二个是输出文件的名字，这里命名为 bundle.js，暂时不管 bundle.js 里面是什么内容，做了哪些工作，但是可以知道就是 webpack 使用一定的魔力，把两个文件的依赖和运行在 bundle.js 完成了。

```bash
webpack index.js bundle.js
```
现在发现 bundle.js 被创建出来，再创建一个 html 页面来引用它。

```html
<html>
  <head>
    <title> Our first webpack exmaple </title>>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```
现在用浏览器打开这个 html 页面，发现 alert 出现了，任务完成，庆祝一下！我们可以用 ES6 来完成模块化开发啦。
