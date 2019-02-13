/**
 * JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
 *
 * 当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，
 * 如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到
 * Object.prototype对象，最后，如果还没有找到，就只能返回undefined。
 */
'use strict';

function log(x) {
    console.log(x);
}

log('==================');

//原型链

log('========= Array对象原型链  =======');

var arr = [1, 2, 3];

//原型链
// arr ----> Array.prototype ----> Object.prototype ----> null

log('========= 函数原型链  =======');

function foo() {
    return 0;
}

//原型链
// foo ----> Function.prototype ----> Object.prototype ----> null


log('========= 构造函数  =======');

function Student(name) {
    this.name = name;
    this.hello = function () {
        log('Hello, ' + this.name + '!');
    }
}

//如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this
var xiaoming = new Student('小明');
log(xiaoming.name);
xiaoming.hello();

//原型链
// xiaoming ----> Student.prototype ----> Object.prototype ----> null

log(xiaoming.constructor === Student.prototype.constructor);
log(Student.prototype.constructor === Student);

log(Object.getPrototypeOf(xiaoming) === Student.prototype);
log(xiaoming instanceof Student);

log('========= createStu  =======');
function Stu(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}

Stu.prototype.hello = function () {
    log('Hello, ' + this.name + '!');
};

function createStu(props) {
    return new Stu(props || {});
}

var xiaowang = createStu({name: '小王'});

log(xiaowang.grade);
log(xiaowang.name);


