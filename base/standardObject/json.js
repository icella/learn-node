/**
 *
 */
'use strict';

function log(x) {
    console.log(x);
}

log('==================');
log('=========序列化=======');

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

log(JSON.stringify(xiaoming));

//要输出得好看一些，可以加上参数，按缩进输出：
log(JSON.stringify(xiaoming, null, ' '));

//第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array
log(JSON.stringify(xiaoming, ['name', 'skills'], ' '));

//可以传入一个函数，这样对象的每个键值对都会被函数先处理
function convert(key, value) {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }

    return value;
}

log(JSON.stringify(xiaoming, convert, ' '));

log('=========反序列化=======');

//拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：
log(JSON.parse('[1,2,3,true]')); // [1, 2, 3, true]
log(JSON.parse('{"name":"小明","age":14}')); // Object {name: '小明', age: 14}
log(JSON.parse('true')); // true
log(JSON.parse('123.45')); // 123.45

//JSON.parse()还可以接收一个函数，用来转换解析出的属性：
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});

log(JSON.stringify(obj));