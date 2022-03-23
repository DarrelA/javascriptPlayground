/*
Udemy: The Modern Javascript Bootcamp Course (2022)
Colt Steele & Stephen Grider
*/

// ************************************************************************************************** //

// **************
// ARROW FUNCTION
// **************

// const printThis = () => console.log('1: ', this);
// printThis();

// ************************************************************************************************** //

// console.log(this);
// const printThis = () => console.log('2: ', this);

// printThis();

// ************************************************************************************************** //

// const colors = {
//   printColor() {
//     console.log(this);
//     // const printThis = () => console.log('3: ', this);
//     // printThis();
//   },
// };

// colors.printColor();

// ************************************************************************************************** //

// const colors = {
//   printColor() {
//     console.log(this);
//     const printThis = () => console.log('3: ', this);
//     printThis();
//   },
// };

// colors.printColor();

// ************************************************************************************************** //

// *******************
// BIND, CALL OR APPLY
// *******************

// const printThis = function () {
//   console.log(this);
// };

// printThis.call({ color: 'red' });
// printThis.apply({ color: 'blue' });
// printThis();

// ************************************************************************************************** //

// const printThis = function () {
//   console.log(this);
// };

// const bindThis = printThis.bind({ colour: 'red' });
// console.log(bindThis);
// printThis();

// ************************************************************************************************** //

// function printThis() {
//   console.log(this);
// }

// const bindThis = printThis.bind({ colour: 'red' });
// bindThis();

// ************************************************************************************************** //

// function printThis(...args) {
//   console.log(`the value of this is: ${JSON.stringify(this)}\n
//       arguments passed are : ${args.join(' ')};
//     `);
// }

// const bindThis = printThis.bind({ colour: 'red' });
// bindThis('first argument', 'second argument');

// ************************************************************************************************** //

// ***************************
// ALL OTHER CASES AKA THE DOT
// ***************************

// const colors = {
//   printColor() {
//     console.log(this);
//   },
// };

// // THE DOT POINTS AT 'colors'
// colors.printColor();

// ************************************************************************************************** //

const colors = {
  printColor() {
    console.log(this);
  },
};

const randomObject = { a: 1 };

// Assign printColor function to randomObject without calling it
// on a property call printColor23523
randomObject.printColor23523 = colors.printColor;
randomObject.printColor23523();

// ************************************************************************************************** //
