//-----------------
//主要属性
//-----------------
//返回一个数字，表示当前进程的进程号。
console.log(`process.pid: ${process.pid}`);

//返回一个字符串，表示当前的操作系统
console.log(`process.platform: ${process.platform}`);

//返回一个字符串，表示当前使用的 Node 版本
console.log(`process.version: ${process.version}`);
console.log(`process.versions: ${JSON.stringify(process.versions)}`);

//返回一个字符串，默认值为node，可以自定义该值
console.log(`process.title: ${process.title}`);
process.title = 'zhoujl-node'
console.log(`process.title: ${process.title}`);

//returns a String identifying the processor architecture
//For instance 'arm', 'ia32', or 'x64'.
console.log(`process.arch: ${process.arch}`);

//returns an array
//The first element will be process.execPath
//The second element will be the path to the JavaScript file being executed
console.log(`process.argv: ${process.argv}`);

//process.env属性返回一个包含用户环境信息的对象,可以自定义增加、删除
console.log(`process.env: ${process.env}`);

//-----------------
//主要方法
//-----------------
//returns the current working directory of the Node.js process.
console.log(`process.cwd(): ${process.cwd()}`);

process.on('exit', (code) => {
    //exitCode默认为0，表示正常退出
    console.log(`About to exit with code: ${code}`);
});