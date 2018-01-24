const url = require('url');

let href = 'http://www.zhoujl.com:8080/blog/comment?category=news&tag=tech#hash#hash'

console.log('------protocol');
console.log(url.parse(href).protocol);

console.log('------host');
console.log(url.parse(href).host);
console.log(url.parse(href).hostname);
console.log(url.parse(href).port);

console.log('------path');
console.log(url.parse(href).path);
console.log(url.parse(href).pathname);
console.log(url.parse(href).query);

console.log('------hash');
console.log(url.parse(href).hash);

