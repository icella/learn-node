/**
 * 相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”
 */
'use strict';

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++){
        arr.push(function () {
            return i * i;
        })
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 16
console.log(f2()); // 16
console.log(f3()); // 16

//原因就在于返回的函数引用了变量i，但它并非立刻执行。
//等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16

//!!! 返回函数不要引用任何循环变量，或者后续会发生变化的变量。

// 如果一定要引用循环变量怎么办？
// 方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，
// 无论该循环变量后续如何更改，已绑定到函数参数的值不变

function count1() {
    var arr = [];
    for(var i = 1; i <= 3; i++){
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }

    return arr;
}

var results1 = count1();
var fn1 = results1[0];
var fn2 = results1[1];
var fn3 = results1[2];

console.log(fn1()); // 1
console.log(fn2()); // 4
console.log(fn3()); // 9


