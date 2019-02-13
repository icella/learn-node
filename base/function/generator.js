/**
 * generator（生成器）是ES6标准引入的新的数据类型。
 * 一个generator看上去像一个函数，但可以返回多次。
 */
'use strict';

function* foo() {
    yield x + 1;
    yield x + 2;

    return x + 3;
}

//斐波那契数列
function fib(max) {
    var
        a = 0,
        b = 1,
        arr = [0, 1];

    while (arr.length < max){
        [a, b] = [b, a + b];
        arr.push(b);
    }

    return arr;
}

//测试
console.log(fib(5));
console.log(fib(10));

//使用generator改写斐波那契数列
function* fibG(max) {
    var
        a = 0,
        b = 1,
        n = 0;

    while (n < max){
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
}

// console.log(fibG(5));

var f = fibG(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


for (var x of fibG(10)){
    console.log(x);
}

//自增Id

function* netx_id() {
    var current_id = 1;

    while(true){
        yield current_id;
        current_id ++;
    }
}

//测试

var x,
    pass = true,
    g = netx_id();

for (x = 1; x < 100; x ++){
    if(g.next().value !== x){
        pass = false;
        console.log("fail");
        break;
    }
}

if(pass){
    console.log("success");
}