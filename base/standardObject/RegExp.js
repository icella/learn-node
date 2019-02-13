/**
 *
 */
'use strict';

function log(x) {
    console.log(x);
}

log('==================');


// JavaScript有两种方式创建一个正则表达式：
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

var re = /^\d{3}\-\d{3,8}$/;

//RegExp对象的test()方法用于测试给定的字符串是否符合条件。
log(re.test('010-12345'));
log(re.test('010-1234x'));
log(re.test('010 12345'));

log('==================');

//切分字符串
log('a b    c'.split(' '));     //无法识别连续的空格

log('a b    c'.split(/\s+/));
log('a,b, c  d'.split(/[\s,]+/));
log('a,b;;c  d'.split(/[\s,;]+/));

log('==================');



