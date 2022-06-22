## About the Project

- Learn and Understand NodeJS
- Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.
- Anthony Alicea

&nbsp;

---

&nbsp;

## require

- <b>require</b> is function, that you pass a 'path' too
- module.exports is what the require function returns
- this works because your code is actually wrapped in a function that is given these things as function parameters
- <b>Revealing Module Pattern: </b>Exposing only the properties and methods you want via an returned object
- [Is there a way to "require" a JS file only once in nodejs?](https://stackoverflow.com/questions/8958097/is-there-a-way-to-require-a-js-file-only-once-in-nodejs)

---

- <b>Web Server Checklist</b>
  - Better ways to organize our code into reusable pieces
  - Ways to deal with files
  - Ways to deal with databases
  - The ability to communicate over the internet
  - The ability to accept requests and send responses (in the standard format)
  - A way to deal with work that takes a long time

&nbsp;

---

&nbsp;

## Events

- Something that has happened in our app that we can respond to
- 2 different kinds of events
  - System Events (C++ Core & libuv)
  - Custom Events (JavaScript Core & Event Emitter)
- <b>Magic String</b>
  - A string that has some special meaning in our code.
  - This is bad because it makes it easy for a typo to cause a bug, and hard for tools to help us find it.

```
Prototype Chain (app.js)

greetr -> Greetr.prototype -> EventEmitter.prototype
                |                 |           |
                 -> greet          -> on       -> emit

greetr.on()
greetr.emit()
greetr.greet()
```

&nbsp;

---

&nbsp;

> Mark: Why not define "greet()" in "Greetr" directly?

> Anthony: For a few reasons, a couple big ones are:
>
> 1. If you define it directly on the object, then a copy of 'greet' will exist on every object you create individually. This takes up memory unnecessarily, especially if you create many Greetr objects. By having all of the objects share the same 'greet' function you save memory space (because 'greet' only exists once).
>
> 2. You can change the 'greet' function and every Greetr object will instantly get access to the change. Not so if every object has its own 'greet' function.
>
> Thanks, and thanks for taking the course!

&nbsp;

---

&nbsp;

## Asynchronous (NodeJS)

![v8-libuv-event-loop](./diagrams/v8-libuv-event-loop.png)

- <b>Callbacks</b>
  - A function passed to some other function, which we assume will be invoked at some point
  - The function 'calls back' back invoking the function you give it when it is done doing its work.
  - Ensure the order of callbacks using Promises
  - <b>Error-First Callback: </b>Callbacks take an error object as their first parameter
    - <code>null</code> if no error, otherwise will contain an object defining the error. This is a standard so we know in what order to place our parameters for our callbacks.
- <b>Non-blocking: </b>Doing other things without other things without stopping your programming from running

![req-res](./diagrams/req-res.png)

- <b>Buffer: </b>A temporary holding spot for data being moved from one place to another (intentionally limited in size)
- <b>Stream: </b>A sequence of data made available over time (pieces of data that eventually combine into a whole)
  - <b>Chunk: </b> A piece of data being sent through a stream (data is split in 'chunks' and streamed)
- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- <b>Abstract (Base) Class: </b>: A type of constructor you never work directly with, but inherit from.
  - We create new custom objects which inherit from the abstract base class.
- <b>Pipe: </b> Connecting two streams by writing to one stream what is being read from another. (in Node you pipe from a Readable stream to a Writable stream)

&nbsp;

---

&nbsp;
