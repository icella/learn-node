/**
 * filter也是一个常用的操作，它用于把Array的某些元素过滤掉，
 * 然后返回剩下的元素。
 */

'use strict';

//在一个Array中，删掉偶数，只保留奇数
var arr  = [1, 2, 3, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});

console.log(r);

//把一个Array中的空字符串删掉
var brr = ['A', '', 'B', null, undefined, 'C', '   '];
var s = brr.filter(function (s) {
    return s && s.trim();
});

console.log(s);

