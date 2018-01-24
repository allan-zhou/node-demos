var http = require('http');

http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('Home');
    }
    else if (req.url == "/demos/node-demos") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('node-demos');
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('404!Not Found!');
    }
}).listen(8080, 'localhost');

console.log('Server running on port 8080');
