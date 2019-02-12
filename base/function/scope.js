'use strict';

function foo() {
    var x = 1;
    x = x + 1;
}

// x = x + 2;

function bar() {
    var x = 'A';
    x = x + 'B';
}

// JavaScript的函数在查找变量时从自身函数定义开始，
// 从“内”向“外”查找。
// 如果内部函数定义了与外部函数重名的变量，
// 则内部函数的变量将“屏蔽”外部函数的变量
function foo(){
    var x = 1;
    function bar(){
        var x = 'A';
        console.log('x in bar() = ' + x);
    }
    console.log('x in foo');
    bar();
}

foo();

