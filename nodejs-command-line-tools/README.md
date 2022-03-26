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

&nbsp;

### Notes taken from Promise.all-Based Solution comment section:

> <b>Eric: </b>Is our requireAuth function secure enough to use in production? How do we know that someone is not faking the presence of a userID by tampering with the request data?

> <b>Kamil: </b>that middleware function won't prevent potential security flaws on its own. Web security is a highly complex and ever-evolving topic on its own. Session hijacking , session spoofing or session fixation can still occur. XSS and Cross-Site Request Forgery can also occur. Your server-side code must ensure that strict security checks are in place

> 1. sessions should be short-lived - expiry date must be set)
> 2. session ids should be unique per user and not easy to decrypt

> 1. Sanitization and Validation of user generated input
> 2. usage of appropriate secure HTTP Headers
> 3. transport data over HTTPS

> These are the bare must-do things. I am attaching a few links for you to study :

- https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- https://owasp.org/www-community/attacks/Session_hijacking_attack
- https://pdos.csail.mit.edu/papers/webauth:sec10.pdf
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

&nbsp;
