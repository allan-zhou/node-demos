const fs = require('fs');
const path = require('path');

const sourceJpg = path.resolve(__dirname, '../assests/zhouxch.jpg');
const sourceTxt = path.resolve(__dirname, '../assests/hello.txt');
const distLog = path.resolve(__dirname, 'files/log.txt');
const distJpg = path.resolve(__dirname, 'files/zhouxch-copy.jpg');
const distTxt = path.resolve(__dirname, 'files/hello-copy.txt');


fs.writeFile(distLog, `log at ${new Date().toLocaleString()}`, (err) => {
    if (err) throw err;
});

fs.readFile(sourceJpg, (err, data) => {
    if (err) throw err;

    fs.writeFile(distJpg, data, (err) => {
        if (err) throw err;
    });
});

fs.readFile(sourceTxt, (err, data) => {
    if (err) throw err;

    fs.writeFile(distTxt, data, (err) => {
        if (err) throw err;
    });
});
