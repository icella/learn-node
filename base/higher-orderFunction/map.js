/*

map()方法定义在JavaScript的Array中，
我们调用Array的map()方法，传入我们自己的函数，
就得到了一个新的Array作为结果
*/

'use strict';

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);

console.log(results);

console.log(arr.map(String));