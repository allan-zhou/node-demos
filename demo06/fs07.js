const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');

let rs = fs.createReadStream(sourceTxt, { encoding: 'utf8' });

rs.on('open',(fd)=>{
    console.log('开始读取文件');
});

rs.pause();

rs.on('data', (data) => {
    console.log(data);
});

setTimeout(function() {
    rs.resume();
    console.log('恢复读取文件');
}, 2000);