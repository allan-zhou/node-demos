const path = require('path');

//当前模块的目录名
//__dirname 实际上不是一个全局变量，而是每个模块内部的。
console.log(`__dirname: ${__dirname}`);
console.log(`path.dirname(): ${path.dirname(__filename)}`);

//当前模块的文件名。 这是当前模块文件的解析后的绝对路径。
//__filename 实际上不是一个全局变量，而是每个模块内部的。
console.log(`__filename: ${__filename}`);

