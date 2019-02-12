const crypto = require('crypto');

const hashType = ['md5', 'sha1', 'sha256', 'sha512'];

for(var i in hashType){
    const hash = crypto.createHash(hashType[i]);

    // 可任意多次调用update():
    hash.update('Hello, world!');
    hash.update('Hello, nodejs!');

    const r = hash.digest('hex');
    console.log(`${hashType[i]} hash: ${r}`);
}