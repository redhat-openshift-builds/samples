// From https://github.com/shipwright-io/sample-nodejs/blob/main/source-build/app.js

var port = (process.env.PORT || 8080);
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
}).listen(port);
