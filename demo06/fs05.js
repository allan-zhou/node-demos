const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');

let getLogFile = () => {
    let filepath = path.resolve(__dirname, 'log');
    if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath);
        console.log('创建目录成功');
    }
    return path.resolve(filepath, 'log.txt');
}

//写文件
//fs.write(fd, buffer, offset, length[, position], callback)
fs.open(getLogFile(), 'a', (err, fd) => {
    if (err) throw err;

    let buffer = Buffer.from(`\n写入新日志at：${new Date().toLocaleString()}`);

    fs.write(fd, buffer, 0, buffer.length, null, (err, written, buffer) => {
        if (err) throw err;
        console.log(written.toString());
        console.log(buffer.toString());
    });
});
