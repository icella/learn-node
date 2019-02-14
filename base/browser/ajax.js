/**
 * AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。
 */
'use strict';

function log(x) {
    console.log(x);
}

log('=========  ajax  =========');

function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code:' + code;
}

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if(request.readyState === 4){
        if(request.status === 200){
            return success(request.responseText);
        } else {
            return  fail(request.status);
        }
    } else {

    }
}

request.open('GET', 'api/categories');
request.send();

log('request already sent, please wait...');