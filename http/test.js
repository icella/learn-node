'use strict';

// 解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象
var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


// 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录
var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.');
console.log(workDir);

var filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath);