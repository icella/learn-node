'use strict';

//read image from 'sample.png'

const fs = require('fs');

console.log('>>> BEGIN >>>');

fs.readFile('sample.png', 'utf-8', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

console.log('>>> END >>>');
