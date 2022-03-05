// https://www.youtube.com/watch?v=cNjIUSDnb9k Code with Ania Kubów - Callbacks in JavaScript Explained!
// ************************************************************************************************** //

// action1 takes 5s and action2 takes 2s.
// action1 = () => {
//   console.log('First');
//   setTimeout(action2, 2000);
// };
// action2 = () => console.log('Second');
// setTimeout(action1, 5000);

// ************************************************************************************************** //

// action1 takes 2s and action2 takes 5s.
// a1 = () => {
//   console.log('First');
//   setTimeout(a2, 5000);
// };
// a2 = () => console.log('Second');
// setTimeout(a1, 2000);

// ************************************************************************************************** //

// PROBLEM!!!! Try the code in browser console ;)
// a1 = (callback) => {
//   console.log('First');
//   setTimeout(callback, 5000);
// };
// a2 = () => console.log('Second');
// setTimeout(a1(a2), 5000);

// ************************************************************************************************** //

// a1 = (callback) => {
//   console.log('First');
//   setTimeout(callback, 5000);
// };
// a2 = () => console.log('Second');
// setTimeout(() => a1(a2), 2000);

// ************************************************************************************************** //

a1 = (callback, message1, anotherCallback) => {
  console.log(message1);
  setTimeout(callback, 5000);
  anotherCallback();
};
a2 = (message2) => console.log(message2);
a3 = () => console.log('Third');
setTimeout(() => a1(() => a2('Second'), 'First', a3), 2000);
