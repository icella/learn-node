/**
 * 在JavaScript中，Date对象用来表示日期和时间。
 */
'use strict';

function log(x) {
    console.log(x);
}

//要获取系统当前时间，用：
var now = new Date();

log(now.getFullYear());   // 2019, 年份
log(now.getMonth());  // 1, 月份，注意月份范围是0-11， 1表示2月
log(now.getDate());   // 13, 表示13号
log(now.getDay());    // 3， 表示星期三
log(now.getHours());  // 15， 24小时制
log(now.getMinutes());// 24， 分钟
log(now.getSeconds());// 48， 秒
log(now.getMilliseconds());// 456, 毫秒数
log(now.getTime());    // 1550042688456， 以number形式表示的时间

log('==================');

//如果要创建一个指定日期和时间的Date对象，可以用
var d = new Date(2017, 2, 13, 20, 14, 20, 134);
log(d);

var m = Date.parse('2017-08-11T19:23:11.234+08:00');
log(m);

var n = new Date(1435146562875);
log(n);
log(n.getMonth());

log(n.toLocaleDateString());
log(n.toUTCString());