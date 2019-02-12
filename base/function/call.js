// 调用函数时，按顺序传入参数即可

function abs(x) {
    if(x > 0){
        return x;
    } else {
        return -x;
    }
}


console.log(abs(10)) ;
console.log(abs(-9)) ;

// 由于JavaScript允许传入任意个参数而不影响调用，
// 因此传入的参数比定义的参数多也没有问题，
// 虽然函数内部并不需要这些参数
console.log(abs(10, 'bababaa')) ;
console.log(abs(-9, 'haha', 'hhee', null)) ;

// 传入的参数比定义的少也没有问题： 返回NaN
// 此时abs(x)函数的参数x将收到undefined，计算结果为NaN。
console.log(abs());

// 要避免收到undefined，可以对参数进行检查：
function abs2(x) {
    if(typeof x !== 'number'){
        throw 'Not a number';
    }

    if(x > 0){
        return x;
    } else {
        return -x;
    }
}

abs2();