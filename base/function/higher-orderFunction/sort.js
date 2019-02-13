/**
 * Array的sort()方法默认把所有元素先转换为String再排序
 * 字符串根据ASCII码进行排序
 *
 */

'use strict';

//默认排序
console.log(['Google', 'Apple', 'Microsoft'].sort()); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
console.log(['Google', 'apple', 'Microsoft'].sort()); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
console.log([10, 20, 1, 2].sort()); // [1, 10, 2, 20]

//sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if(x < y){
        return -1;
    }

    if(x > y){
        return 1;
    }

    return 0;
});

console.log(arr);
