## About The Project

- The Modern JavaScript Bootcamp on Udemy
- Tutorial for Hangman

## Installation

1. Install Live Server extension on VS Code.
2. Create config.js in root async-hangman folder
   ```sh
   touch config.js
   ```
3. Insert <i>countrylayer</i> API key. <i>This is totally <span style="color: red"><b>UNSAFE</b></i></span> for production as you can retrieve the key front client side.
   ```js
   const API_KEY_COUNTRYLAYER = 'someAPIkey'; // https://countrylayer.com/
   ```
4. VS Code - Drawio Integration extension

## Notes

1. Web API on XMLHttpRequest (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
2. Async callbacks (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#async_callbacks)

   > When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e, the callback function is not executed immediately. It is "called back" (hence the name) asynchronously somewhere inside the containing function's body. The containing function is responsible for executing the callback function when the time comes.
