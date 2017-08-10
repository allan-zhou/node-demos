const hello = (name) => {
  name = 'china';
  // console.log(name);
}

// exports = hello;
exports.name = 'zhoujl';
exports.age = 30;
exports.hello= (what) => {
  console.log('hello ' + what);
}

// module.exports = hello;

console.log('--------------module------------');
console.log(module);

// console.log('--------------require------------');
// console.log(require);

console.log('--------------exports------------');
console.log(exports);
