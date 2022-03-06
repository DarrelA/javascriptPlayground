/*
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- https://javascript.info/currying-partials
- https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
- https://medium.com/dailyjs/why-the-fudge-should-i-use-currying-84e4000c8743
*/

// ************************************************************************************************** //

const myFunc = () => {
  const msg = 'This is closure.';
  const printMsg = () => console.log(msg);
  return printMsg;
};

const myPrintMsg = myFunc();
myPrintMsg();

// ************************************************************************************************** //

// const createCounter = () => {
//   let privateCounter = 0;
//   return {
//     increment() {
//       privateCounter++;
//     },
//     decrement() {
//       privateCounter--;
//     },
//     get() {
//       return privateCounter;
//     },
//   };
// };

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.privateCounter = 4;
// console.log(counter.get());

// ************************************************************************************************** //

// const createAdd = (a) => (b) => a + b;
// const add10 = createAdd(10);
// const add100 = createAdd(100);

// console.log(add10(-5));
// console.log(add10(-5 + add100(0)));

// ************************************************************************************************** //
