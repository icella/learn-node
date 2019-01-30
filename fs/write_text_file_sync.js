'use strict';

//write text to 'output.txt'

const fs = require('fs');

console.log('>>> BEGIN >>>');

const data = 'Hello, NodeJs';
fs.writeFileSync('output.txt', data);

console.log('>>> END >>>');
