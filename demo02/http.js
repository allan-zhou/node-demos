var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'ContentType': 'text/plain'});
    res.write('Hello node');
    res.end();
}).listen(8081,'127.0.0.1');

console.log('Server running on port 8081');