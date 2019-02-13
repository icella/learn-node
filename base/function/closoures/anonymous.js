/**
 * 创建一个匿名函数并立刻执行
 */
'use strict';

var rs = (function (x) {
    return x * x;
})(3);

console.log(rs);

//用括号把整个函数定义括起来
(function () { return x * x })(3);