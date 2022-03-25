## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for Create Node JS Command Line Tools
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

#### JavaScript with Browser VS Node

| JS in the Browser                                                          | JS with Node                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------- |
| Executed by adding script tags to an HTML document                         | Executed by running the Node CLI from your terminal |
| Access to DOM & related objects (window)                                   | No DOM                                              |
| Code can reference variables in other files freely                         | Each file is its own separate world                 |
| Include libraries by adding script tags (more complicated solutions exist) | Include libraries by using NPM                      |

&nbsp;

#### Debugging with Node

```js
node inspect app.js         // 1
node --inspect app.js       // 2
node --inspect-brk app.js   // 3
```

1. Start up a debugger CLI and pause execution whenever a 'debugger' statement is hit.
2. Start up a debugger instance and pause execution whenever a 'debugger' statement is hit. Access the debugger at 'chrome://inspect'
3. Start up a debugger instance and wait to execute until a debugger is connected. Access the debugger at 'chrome://inspect'

- [How to use the Node.js REPL](https://nodejs.dev/learn/how-to-use-the-nodejs-repl)
