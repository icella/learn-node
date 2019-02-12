/**
 Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，
 这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，
 其效果就是：

 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
 */

'use strict';

var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function (x, y) {
    return x + y;
});

console.log(result);

console.log(arr.reduce(function (x, y) {
    return x * y;
}));

console.log(arr.reduce(function (x, y) {
    return x * 10 + y;
}));


