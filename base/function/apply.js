/*

虽然在一个独立的函数调用中，根据是否是strict模式，
this指向undefined或window，不过，我们还是可以控制this的指向的！

要指定函数的this指向哪个对象，可以用函数本身的apply方法，
它接收两个参数，第一个参数就是需要绑定的this变量，
第二个参数是Array，表示函数本身的参数。

*/


function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaowang = {
    name : '小王',
    birth : 1990,
    age : getAge
};

console.log("xiaowang's age " + xiaowang.age());
console.log("xiaowang's age " + getAge.apply(xiaowang, []));

/*

另一个与apply()类似的方法是call()，唯一区别是：

apply()把参数打包成Array再传入；

call()把参数按顺序传入。
*/

//比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
Math.max.apply(null, [3, 4, 5]);
Math.max.apply(null, 3, 4, 5);

// 对普通函数调用，我们通常把this绑定为null。




