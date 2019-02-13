/**
 * 闭包的用法
 */

//用法一：从外部读取局部变量，即读取函数内部的变量

function f1() {
    var n = 999;
    return function f2() {
        console.log(n);
    }
}

var result = f1();
result();

//用法二: 让这些变量的值始终保持在内存中
function f1() {
    var n = 999;
    //nAdd是一个全局变量，而不是局部变量
    //nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，
    // 所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作
    nAdd = function () { n += 1; };

    function f2() {
        console.log(n);
    }

    return f2;
}

var rs = f1();
rs();
nAdd();
rs();


var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        };

    }

};

console.log(object.getNameFunc()());

var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };

    }

};

console.log(object.getNameFunc()());