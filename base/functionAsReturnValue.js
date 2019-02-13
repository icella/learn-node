/**
 * 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。
 */
'use strict';

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    };

    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f);


//调用函数f时，才真正计算求和的结果：
f();
console.log(f());

//每次调用都会返回一个新的函数，即使传入相同的参数：
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);

//f1()和f2()的调用结果互不影响
console.log(f1 === f2); // false