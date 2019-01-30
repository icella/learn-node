'use strict'

// 引入的模块作为变量保存在greet变量中
// 其实变量greet就是在hello.js中我们用module.exports = greet;输出的greet函数

// 引入模块的时候，请注意模块的相对路径。因为main.js和hello.js位于同一个目录，所以我们用了当前目录.
// 如果只写模块名, Node会依次在内置模块、全局模块和当前模块下查找
var greet = require('./hello');

var s= 'Michael';

greet(s);