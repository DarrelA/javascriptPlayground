const EventEmitter = require('events');

const EC = require('./eventConfig').events;
const CustomEmitter = require('./emitter');

const customEmitter = new CustomEmitter();

customEmitter.on(EC.GREET, () => console.log('App says hello to Emitter in emitter.js'));
customEmitter.on(EC.GREET, () => console.log('Function sitting inside an array.'));

console.log('Hello from app.js');

customEmitter.emit(EC.GREET); // Manually emit the event

const emitter = new EventEmitter(); // nodejs emitter
emitter.on(EC.GREET, () => console.log('App says hello to Nodejs EventEmitter'));
emitter.on(EC.GREET, () => console.log('Hello! Hello!'));
console.log('\nSecond hello from app.js');
emitter.emit(EC.GREET);

/* #################################################################### */

class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = '\nThis is Greetr extends EventEmitter';
  }

  greet(name) {
    console.log(this.greeting);
    this.emit('greet', name);
  }
}

let greetr = new Greetr();
greetr.on('greet', (name) => console.log('Greetings to ' + name));
greetr.greet('Bohn');

/* #################################################################### */

('use strict');

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.firstName} ${this.lastName}`);
};

const john = new Person('John', 'Doe');
john.greet();

const jane = new Person('Jane', 'Doe');
jane.greet();

/* #################################################################### */

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  goodbye() {
    console.log(`Goodbye, ${this.firstName} ${this.lastName}`);
  }
}

const john2 = new Person2('John', 'Doe');
john2.goodbye();

/* #################################################################### */
