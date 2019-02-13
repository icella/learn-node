/**
 *
 * 把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，
 * 再利用reduce()就可以写出一个把字符串转换为Number的函数
 */


'use strict';

function string2int(s){
    return s.split("").map(function (x) {
        // return parseInt(x);
        return +x;
    }).reduce(function (x, y) {
        return x * 10 + y;
    });
}

function str2int2(s) {
    return s.split("").map(x => x*1).reduce((x, y) => x*10 + y);
}

var str = '13579';
console.log(typeof str);
console.log(typeof str2int2(str));


if (str2int2('0') === 0 && str2int2('12345') === 12345 && string2int('12300') === 12300) {
    if (str2int2.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (str2int2.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}