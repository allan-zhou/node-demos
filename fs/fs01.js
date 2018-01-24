const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');

fs.readFile('noexist.html', (err, data) => {
    if (err) {
        if(err.code == 'ENOENT'){
            console.log('指定的文件不存在');
        }
    }
});

fs.readFile(sourceJpg, (err, data) => {
    if (err) throw err;

    console.log(data);
});

fs.readFile(sourceTxt, 'utf8',(err, data) => {
    if (err) throw err;

    console.log(data);
});
