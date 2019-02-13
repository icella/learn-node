//一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数

'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}

var x = add(-5, 6, Math.abs);

console.log(x);