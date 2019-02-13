/**
 * 很久很久以前，有个叫阿隆佐·邱奇的帅哥，发现只需要用函数，
 * 就可以用计算机实现运算，而不需要0、1、2、3这些数字和+、-、*、/这些符号。
 */
'use strict';

//定义数字0
var zero = function (f) {
    return function (x) {
        return x;
    }
};


//定义数字1
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

//定义加法
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}

//计算数字2 = 1 + 1
var two = add(one, one);

//计算数字3 = 1 + 2
var three = add(one, two);

//计算数字5 = 2 + 3
var five = add(two, three);

//测试
(zero(function () { console.log('print 0 time');}))();

(one(function () { console.log('print 1 time');}))();

(three(function () { console.log('print 3 times');}))();

(five(function () { console.log('print 5 times');}))();


