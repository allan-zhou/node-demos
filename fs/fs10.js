const fs = require('fs');
const path = require('path');

//关于WriteStream对象的write方法返回一个布尔类型，当缓存区中数据全部写满时，返回false;
//表示缓存区写满，并将立即输出到目标对象中

//第一个例子
var ws = fs.createWriteStream(__dirname + '/log/test.txt');
for (var i = 0; i < 10000; i++) {
  var w_flag = ws.write(i.toString());
  //当缓存区写满时，输出false
  console.log(w_flag);
}