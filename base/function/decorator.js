/*

利用apply()，我们还可以动态改变函数的行为。

JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
*/

'use strict';

var count = 0;
var oldParseInt = parseInt; //保持原函数

parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments);
};

parseInt('10');
parseInt('20');
parseInt('30');
parseInt('40');

console.log('count = ' + count);