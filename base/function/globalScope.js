/*
不在任何函数内定义的变量就具有全局作用域。
实际上，JavaScript默认有一个全局对象window，
全局作用域的变量实际上被绑定到window的一个属性
*/


'use strict';

var course = 'Learn Javascript';

// 直接访问全局变量course和访问window.course是完全一样的。
alert(course);  // 直接调用foo()
alert(window.course);   // 通过window.foo()调用