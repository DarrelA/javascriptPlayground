const change = (b) => (b = 2);

let a = 1;
console.log('change(a):', change(a));
change(a); // pass by value
console.log('a:', a);

const changeObj = (d) => {
  d.prop1 = () => {};
  d.prop2 = {};
  // return d;
};

let c = {};
c.prop1 = {};
console.log('changeObj(c):', changeObj(c));
changeObj(c); // pass by reference
console.log('c: ', c);

/* #################################################################### */

// IIFE Immediately Invoked Function Expressions

let firstName = 'Jane';

((lastName) => {
  let firstName = 'John';
  console.log('IIFE firstName:', firstName);
  console.log('IIFE lastName:', lastName);
})('Doe');

console.log(firstName);

/* #################################################################### */

const buffer = new Buffer.from('Hello', 'utf-8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log('characters written to buffer: ', buffer.write('bye'));
console.log(buffer.toString());

/* #################################################################### */

const arrBuffer = new ArrayBuffer(8);
const view = new Int32Array(arrBuffer);
console.log(arrBuffer);

/* #################################################################### */

const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/greet_txt/greet.txt', {
  encoding: 'utf-8',
  highWaterMark: 16 * 1024,
});

const readable2 = fs.createReadStream(__dirname + '/greet_txt/greet.txt');

const writable = fs.createWriteStream(__dirname + '/greet_txt/greet2.txt');
const writable2 = fs.createWriteStream(__dirname + '/greet_txt/greet3.txt');
const compressed = fs.createWriteStream(__dirname + '/greet_txt/greet.txt.gz');

readable.on('data', (chunk) => {
  // console.log(chunk);
  writable.write(chunk);
});

readable2.pipe(writable2);

const gzip = zlib.createGzip();
readable.pipe(gzip).pipe(compressed);

/* #################################################################### */
