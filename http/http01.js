var http = require('http');

http.createServer((req, res) => {
    //res.writeHead(200, { 'ContentType': 'text/plain' });
    //res.writeHead(200, { 'ContentType': 'text/html' });
    res.writeHead(200, { 'ContentType': 'application/json;charset=utf-8' });
    res.write('Hello node');
    res.end();
}).listen(8080, '127.0.0.1');

console.log('Server running on port 8080');