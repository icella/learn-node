/**
 * JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程
 */
'use strict';

function log(x) {
    console.log(x);
}

log('==================');

var Student = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;

log(xiaoming.name);
xiaoming.run();

// JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，
// 所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已

var Bird = {
    fly: function () {
        log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
xiaoming.fly();
log(xiaoming.__proto__ === Student);

//xiaoming.run();  TypeError: xiaoming.run is not a function


//在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型

//Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，
// 但是新对象什么属性都没有

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;

    return s;
}

var xiaowang = createStudent('小王');
xiaowang.run();

log(xiaowang.__proto__ === Student);
