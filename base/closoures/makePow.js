/**
 * 闭包还可以把多参数的函数变成单参数的函数。
 *
 * 例如，要计算xy可以用Math.pow(x, y)函数
 * 不过考虑到经常计算x2或x3，我们可以利用闭包创建新的函数pow2和pow3
 */
'use strict';

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

//创建两个新函数
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5));   // 25
console.log(pow3(7));   // 343