// 定义函数

function abs(x) {
    if(x > 0){
        return x;
    } else {
        return -x;
    }
}

// 如果没有return, 函数执行完毕，返回undefined

// 由于JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，
// 而函数名abs可以视为指向该函数的变量。
// 匿名函数赋值给了变量abs2，所以，通过变量abs就可以调用该函数。
var abs2 = function (x) {
    if(x > 0){
        return x;
    } else {
        return -x;
    }
};




