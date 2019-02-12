'use strict';

var xiaoming = {
    name : '小明',
    birth : 1990,
    age : function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

console.log(xiaoming.age);  // function xiaoming.age()

// 要保证this指向正确，必须用obj.xxx()的形式调用！
console.log("xiaoming's age " + xiaoming.age()); // 今年调用是29,明年调用就变成30了


