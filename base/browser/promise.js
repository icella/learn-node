/**
 * “承诺将来会执行”的对象在JavaScript中称为Promise对象
 */
'use strict';

function log(x) {
    console.log(x);
}

log('=========    =========');

function test(resolve, reject) {
    var timeout = Math.random() * 2;
    log('set timeout to: ' + timeout + ' seconds. ');
    setTimeout(function () {
        if(timeout < 1){
            log('call resolve()...');
            resolve('200 OK');
        } else {
            log('call reject()...');
            reject('timeout in ' + timeout + ' seconds.');
        }
    }, timeout * 5000);
}

new Promise(test).then(function (result) {
    log('success: ' + result);
}).catch(function (reason) {
    log('fail: ' + reason);
});
