/**
 * 箭头函数相当于匿名函数，并且简化了函数定义
 */

'use strict';

var fn = x => x * x;
console.log(fn(2));

// 两个参数:
var fn2 = (x, y) => x * x + y * y;
console.log(fn2(3, 4));

// 无参数:
var fnNoArg = () => 3.14;
console.log(fnNoArg());

// 可变参数:
var fnArg = (x, y, ...rest) => {
    var i, sum = x + y;
    for(i = 0; i < rest.length; i++){
        sum += rest[i];
    }

    return sum;
};
console.log(fnArg(1, 2, 3, 4, 4, 4));

//箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = function () {
            // TypeError: Cannot read property 'birth' of undefined
            return new Date().getFullYear() - this.birth;
        };

        return fn();
    }
};
// TypeError: Cannot read property 'birth' of undefined
// console.log(obj.getAge());

var obj = {
    birth : 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;

        return fn();
    }
};
console.log(obj.getAge());

var obj = {
    birth : 1990,
    getAge: function (year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;

        return fn.call({birth:2000}, year);
    }
};

console.log(obj.getAge(2015));