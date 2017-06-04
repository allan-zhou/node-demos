const fs = require('fs');
const path = require('path');

const musicPath = path.resolve(__dirname, '../assests/Better-Man.mp3');

let rs = fs.createReadStream(musicPath);
let ws = fs.createWriteStream(path.resolve(__dirname, 'files/Better-Man-copy.mp3'));

rs.pipe(ws);

rs.on('data',(data)=>{
    console.log('数据可读');
});

rs.on('end',()=>{
    console.log('完成');
});

ws.on('drain', function () {
  console.log('系统缓存区数据已经全部输出。')
});