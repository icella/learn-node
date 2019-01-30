'use strict';

var s = 'hello'

function greet(name){
    console.log(s + ', ' + name + '!');
}

// 把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
// 输出的变量可以是任意对象、函数、数组等等。
module.exports = greet;