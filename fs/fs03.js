const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');
const distLog = path.resolve(__dirname, 'files/log.txt');

// 读文件
// fs.read(fd, buffer, offset, length, position, callback)
fs.open(sourceTxt, 'r', (err, fd) => {
    if (err) throw err;

    let buffer = new Buffer(50);

    fs.read(fd, buffer, 1, 4, 2, (err, bytesRead, buffer) => {
        console.log(bytesRead);
        console.log(buffer.slice(0, bytesRead).toString());

        //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 40, null, (err, bytesRead, buffer) => {
            console.log(bytesRead);
            console.log(buffer.slice(0, bytesRead).toString());
        });
    });
});


