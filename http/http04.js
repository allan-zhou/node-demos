var http = require('http');

http.createServer((req, res) => {

    var data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('你Post了数据' + data);
        res.end();
    });

}).listen(8080, 'localhost');

console.log('Server running on port 8080');