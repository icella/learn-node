// JavaScript的函数定义有个特点，
// 它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部

'use strict';

function foo() {
    var x = 'Hello ' + y;
    console.log(x);

    var y = 'Bob';
}

foo();
// Hello undefined

//JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值
function foo() {
    var y; // 提升变量y的申明，此时y为undefined
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}