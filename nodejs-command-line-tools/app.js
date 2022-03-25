// ************************************************************************************************** //

// require('./counter');
// console.log(require.cache);

// ************************************************************************************************** //

// Files get required once!
// 1 counter variable in memory even if app.js is run multiple times.

const counterObject = require('./counter.js');
console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const counterObject2 = require('./counter.js');
console.log(counterObject2.getCounter());

// ************************************************************************************************** //
