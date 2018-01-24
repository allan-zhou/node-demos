const exec = require('child_process').exec;

exec('node -vv', (error, stdout, stderr) => {
    if (error) {
        console.log(`exec error:${error}`);
    }
    console.log(`stdout:${stdout}`);
    console.log(`stderr:${stderr}`);
});
