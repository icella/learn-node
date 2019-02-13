/**
 * 关键字class从ES6开始正式被引入到JavaScript中
 */

'use strict';

function log(x) {
    console.log(x);
}

log('==================');

//用函数实现Student的方法
/*

function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    log('Hello, ' + this.name + '!');
};

*/

//用新的class关键字来编写Student，可以这样写
class Student {
    constructor(name){
        this.name = name;
    }

    hello(){
        log('Hello, ' + this.name + "!");
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }

    myGrade(){
        log('I am at grade ' + this.grade);
    }
}

var xiaowang = new PrimaryStudent('小王', 5);

log(xiaowang.name);
log(xiaowang.grade);

log(xiaowang.__proto__ === PrimaryStudent.prototype);
log(xiaowang.__proto__.__proto__ === Student.prototype);

log(xiaowang instanceof PrimaryStudent);
log(xiaowang instanceof Student);