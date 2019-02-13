/**
 *
 */

'use strict';

function log(x) {
    console.log(x);
}

log('==================');

log('========= 封装隐藏F()  =========');
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

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

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};




