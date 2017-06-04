# fs demos
- readFile()，readFileSync() : demo01
- writeFile()，writeFileSync() : demo02
- fs.open()，fs.openSync() : demo03 | demo04 | demo05
- mkdir()，mkdirSync(): demo05
- fs.existsSync(): demo05
- readdir()，readdirSync()
- watchfile()，unwatchfile()
- createReadStream(): demo06 | demo07
- createWriteStream(): demo08 | demo10
- pipe: demo09

# 注意
- 不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查一个文件是否存在。 作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。
- 不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性。 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。 作为替代，用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误。
- fs.exists(path, callback)废弃的: 使用 fs.stat() 或 fs.access() 代替。