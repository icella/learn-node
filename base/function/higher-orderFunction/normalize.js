/**
 * 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
 * 输入：['adam', 'LISA', 'barT']，
 * 输出：['Adam', 'Lisa', 'Bart']
 */

'use strict';

function normalize(arr) {
    return arr.map(function (x) {
        return x[0].toUpperCase() + x.substring(1).toLowerCase();
    });
}



if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}