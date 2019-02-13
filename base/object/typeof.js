/**
 * 为了区分对象的类型，我们用typeof操作符获取对象的类型，
 * 它总是返回一个字符串
 */
'use strict';

function log(x) {
    console.log(x);
}


log(typeof 123);            // number
log(typeof NaN);               // number
log(typeof 'str');          // string
log(typeof true);           // boolean
log(typeof undefined);         // undefined
log(typeof Math.abs);          // function
log(typeof null);           // object
log(typeof []);                // object
log(typeof {});                // object

log('==================');

//包装对象
var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');

log(typeof n);         // object
log(typeof b);         // object
log(typeof s);         // object


log(n === 123);          // false
log(b === true);         // false
log(s === 'str');        // false

log('==================');
//如果没有写new, Number(), Boolean(), String()被当做普通函数
//把任何类型的数据转换成number, boolean, string，
//注意不是其包装类型

var x = Number(123);
var y = Boolean(true);
var z = String('str');

log(typeof x);           // number
log(typeof y);           // boolean
log(typeof z);           // string