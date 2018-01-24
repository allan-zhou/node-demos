const fs = require('fs');
const path = require('path');

const musicPath = path.resolve(__dirname, '../assests/Better-Man.mp3');

let rs = fs.createReadStream(musicPath);
let ws = fs.createWriteStream(path.resolve(__dirname, 'files/Better-Man-copy.mp3'));

rs.on('open', (fd) => {
    console.log('开始读文件，文件描述符是： ' + fd);
});

rs.on('data', (data) => {
    ws.write(data);
});

ws.on('open', (fd) => {
    console.log('要写入的数据文件已经打开，文件描述符是： ' + fd);
});

rs.on('end', () => {
    console.log('文件读取完成');

    ws.end('完成', () => {
        console.log('文件写入完成');
    });
});

