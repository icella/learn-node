// 从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。

/*

var array = ['hello', 'Javascript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];

*/

//对数组元素进行解构赋值时，多个变量要用[...]括起来
var [x, y, z] = ['hello', 'Javascript', 'ES6'];
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

//如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，
// 注意嵌套层次和位置要保持一致：
let [a, [b, c]] = ['hello', ['Javascript', 'ES6']];
console.log('a = ' + a + ', b = ' + b + ', c = ' + c);

//解构赋值还可以忽略某些元素：
let [, , n] = ['hello', 'Javascript', 'ES6'];
console.log(n);

//如果需要从一个对象中取出若干属性，也可以使用解构赋值，
// 便于快速获取对象的指定属性：

var person = {
    name: '小明',
    age : 20,
    gender : 'male',
    passport: 'G-123555',
    school : 'No.4 middle school',
    address: {
        city : 'Beijing',
        street : 'No.1 Road',
        zipcode : '10001'
    }
};

var {name, age, address:{city, zip}, single = true} = person;

console.log('name = ' + name + ', age = ' + age );
console.log('city = ' + city);

// 解构赋值还可以使用默认值，这样就避免了不存在的属性返回undefined的问题：
console.log('single = ' + single);

// undefined, 因为属性名是zipcode而不是zip
console.log('zip = ' + zip);

// Uncaught ReferenceError: address is not defined
// console.log(address);

// 把passport属性赋值给变量id:
let {passport:id} = person;
console.log('id = ' + id);

var x, y;

//语法错误: Uncaught SyntaxError: Unexpected token =
//{x, y} = {name:'小明', x: 100, y: 200}

//因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。
// 解决方法是用小括号括起来
({x, y} = {name:'小明', x: 100, y: 200});



