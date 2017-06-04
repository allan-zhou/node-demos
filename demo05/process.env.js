process.env.myname = null;
console.log(`process.env.myname:${process.env.myname},${typeof process.env.myname}`);

process.env.myname = 'zhoujl';
console.log(`process.env.myname:${process.env.myname},${typeof process.env.myname }`);

//在process.env中新增一个属性，会将属性值转换成字符串
process.env.myname = {'cn':'周佳良','en':'zhoujl'};
console.log(`process.env.myname:${process.env.MYNAME},${typeof process.env.myname}`);

//在process.env中新增一个属性，会将属性值转换成字符串
//在Windows系统下，环境变量是不区分大小写的
process.env.myAge = 30;
console.log(`process.env.myname:${process.env.myage},${typeof process.env.myage}`);


