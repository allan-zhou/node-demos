const url = require('url');
const querystring = require('querystring');

let href = 'http://www.zhoujl.com:8080/blog/comment?category=新闻&tag=tech&tag=sports#hash#hash'
let qstring = url.parse(href).query;

console.log(qstring);
console.log(querystring.parse(qstring));

const obj = { category: '新闻', tag: [ 'tech', 'sports' ]};
console.log(querystring.stringify(obj));


let escapeStr = querystring.escape(qstring)
console.log(escapeStr);
console.log(querystring.unescape(escapeStr));

