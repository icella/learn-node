function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

// rest参数只能写在最后，前面用...标识，
// 从运行结果可知，传入的参数先绑定a、b，
// 多余的参数以数组形式交给变量rest
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
foo(1);

function area_of_circle(r, pi) {
    if(!pi){
        pi = 3.14;
    }

    return r*r*pi;
}


console.log(area_of_circle(2)) ;
console.log(area_of_circle(2, 3.1416)) ;
