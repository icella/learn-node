/**
 *
 */

'use strict';

function log(x) {
    console.log(x);
}

log('==================');

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    log('Hello, ' + this.name + '!');
};

function PrimaryStudent(props) {
    //调用Student构造函数， 绑定this变量
    Student.call(this, props);
    this.grade = props.grade || 1;
}

log('========= PrimaryStudent原型链  =========');
// new PirmaryStudent() ---> PrimaryStudent.prototype ----> Object.prototype ----> null

//如何修改为
// new PirmaryStudent() ---> PrimaryStudent.prototype ---->  Student.prototype ----> Object.prototype ----> null

//空函数
function F() {
}

//把F的原型指向Student.prototype
F.prototype = Student.prototype;

//把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student。prototype
PrimaryStudent.prototype = new F();
// 把PrimaryStudent原型的构造函数修复为PrimaryStudent
PrimaryStudent.prototype.constructor = PrimaryStudent;
//继续在PrimaryStudent原型（就是new F()对象）上定义方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

var xiaoming = new PrimaryStudent({
   name: '小明',
   grade: 2
});

log(xiaoming.name);
log(xiaoming.grade);

// 验证原型
log(xiaoming.__proto__ === PrimaryStudent.prototype);
log(xiaoming.__proto__.__proto__ === Student.prototype);

// 验证继承关系
log(xiaoming instanceof PrimaryStudent);
log(xiaoming instanceof Student);

