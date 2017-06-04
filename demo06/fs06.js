const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');

let rs = fs.createReadStream(sourceTxt, { encoding: 'utf8' });

rs.on('open', (fd) => {
    console.log('开始读取文件');
});

rs.on('data', (data) => {
    console.log(data);
});

rs.on('end', () => {
    console.log('读取文件结束');
});

rs.on('close',()=>{
    console.log('文件关闭');
});

rs.on('error', (err) => {
    console.log(err);
});
