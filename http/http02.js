var http = require('http');
var fs = require('fs');
var path = require('path');

var filepath = path.resolve(__dirname, 'hello.html');

http.createServer((req, res) => {
    fs.readFile(filepath, (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

}).listen(8080, '127.0.0.1');

console.log('Server running on port 8080');