## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for list.
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

### Running a Node program as an executable & linking a project.

- ["chmod +x <filename>" to change file permission](https://askubuntu.com/questions/443789/what-does-chmod-x-filename-do-and-how-do-i-use-it)
- [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)

- In package.json

```json
"bin": {
    "nls": "./nodejs-list/app.js"
  },
```

- In nodejs-list folder

```sh
chmod +x app.js
npm link
nls
```

&nbsp;

### Is it a file or a folder?

```sh
which node
```

1. Maintain an array of the results from each lstat. As each callback is invoked, add the stats objecto this arary. When array is full, log everything in it.
2. Wrap the lstat call with a promise, use async/await syntax to process lstat call one at a time.
3. Wrap the lstat call with a promise, use async/await + the Promise.all helper method to process lstat calls all at once.

&nbsp;

### Notes taken from The Callback Pattern in Node comment section:

> <b>Luan: </b>I'm just curious about how can the second paremeter in a function be optional, instead of the last one?

> The behaviour you seek to implement is entirely possible. But, we must remember that named function arguments are mapped to function parameters in strictly ordered manner. As such, The following question must be examined; how do you envision the corresponding function signature to look like?

One way would be to set the unused parameter to null || undefined to preserver parameter ordering:

```js
function createUser(email,username,password){

if( typeof username === "undefined") {
     // username is missing
     // use email as username
    username = email;
  }
   return User.create({email,username,password);
}

createUser(email,undefined,password)
```

> But, the invocation signature turns ugly - might become problematic down the line. Even worse, consider a case where we decided to wholly omit the ugly "undefined" argument.

<code>createUser(email,password)</code>

> Doing this would completely shift the position of your parameters in the original function definition signature:

> email --> email <br>
> username --> password <br>
> password --> undefined <br>

> This subtly innocent modification alters your function definition. If you want your functions accepting optional parameters, consider using configuration objects. Stephen demonstrates the use of config object when creating AutoComplete widget.

&nbsp;
