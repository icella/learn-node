
'use strict';

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);

    return true;
});

r;


//利用filter，可以巧妙地去除Array的重复元素：

var r,
    fruits = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange',
        'orange', 'strawberry'];

r = fruits.filter(function (elment, index, self) {
    return self.indexOf(elment) === index;
});

console.log(r);

//去除重复元素依靠的是indexOf总是返回第一个元素的位置，
// 后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。