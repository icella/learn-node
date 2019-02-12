/*
JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，
并且永远指向当前函数的调用者传入的所有参数。
arguments类似Array但它不是一个Array
*/

'use strict';

function foo(x) {
    console.log('x = ' + x);
    for (var i = 0; i < arguments.length; i++){
        console.log('arg ' + i + ' = ' + arguments[i]);
    }
}

foo(10, 20, 30);

// 利用arguments，你可以获得调用者传入的所有参数。
// 也就是说，即使函数不定义任何参数，还是可以拿到参数的值
function abs() {
    if(arguments.length == 0){
        return 0;
    }

    var x = arguments[0];
    return x >= 0 ? x : -x;
}

console.log(abs());
console.log(abs(10));
console.log(abs(-9));