const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');
const distLog = path.resolve(__dirname, 'files/log.txt');


//写文件
//fs.write(fd, buffer, offset, length[, position], callback)
fs.open(distLog, 'a', (err, fd) => {
    if (err) throw err;

    let buffer = Buffer.from('写入新数据');

    fs.write(fd, buffer, 0, 9, 9, (err, written, buffer) => {
        if (err) throw err;
        console.log(written.toString());
        console.log(buffer.toString());

        fs.write(fd, buffer,9, 6, null, (err, written, buffer) => {
            if (err) throw err;

            console.log(written.toString());
            console.log(buffer.toString());
        });
    });
});
