'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    var
        pathname = url.parse(request.url).pathname,
        filepath = path.join(root, pathname);

    fs.stat(filepath, function (err, stats) {
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else if(!err && stats.isDirectory()){
            const defaultPages = ['index.html', 'default.html'];
            var page = defaultPages.find(v => {
                try {
                    return fs.statSync(filepath + '/' + v).isFile();
                } catch (e) {
                    console.info('error ');
                    console.info(e);
                    return false;
                }
            });

            if(!page){
                console.log('404 ' + request.url);
                response.writeHead(404);
                response.end('404 Not Found');
            } else {
                console.log('200' + request.url);
                response.writeHead(200);
                fs.createReadStream(filepath + '/' + page).pipe(response);
            }
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');